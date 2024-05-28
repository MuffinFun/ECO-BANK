const ApiError = require('../../error/ApiError');
const { UserInfo, UserAccount } = require('../../models/models');
const emailService = require('./emailService');
const tokenService = require('./tokenService');
const UserDto = require('../../dtos/auth-dtos/user-dto');

const bcrypt = require('bcrypt');
const uuid = require('uuid');

class UserService {
  async registration(login, email, password, role) {
    try {
      const emailCandidate = await UserAccount.findOne({ where: { email } });
      const loginCandidate = await UserInfo.findOne({ where: { login } });

      if (emailCandidate) {
        throw ApiError.badRequest(`User with email - ${email}, already exist!`);
      } else if (loginCandidate) {
        throw ApiError.badRequest(`This login already exist!`);
      }

      const hashPassword = await bcrypt.hash(password, 3);

      const activationLink = uuid.v4();

      await emailService.sendActivationMail(
        email,
        `${process.env.API_URL}/api/auth/activate/${activationLink}`
      );

      const user = await UserInfo.create({
        login,
        password: hashPassword,
        activation_link: activationLink,
      });

      const userDto = new UserDto(user, email, role);
      const tokens = tokenService.generateTokens({ ...userDto });

      await tokenService.saveToken(userDto.userId, tokens.refreshToken);

      return { ...tokens, userInfo: userDto };
    } catch (error) {
      throw ApiError.badRequest(error.message);
    }
  }
  async activate(activationLink) {
    try {
      const user = await UserInfo.findOne({
        where: { activation_link: activationLink },
      });
      if (!user) {
        throw ApiError.badRequest('Uncorrect activation link!');
      }
      user.is_activated = true;
      await user.save();
    } catch (error) {
      throw ApiError.badRequest(error.message);
    }
  }
  async login(login, password, email, role) {
    const user = await UserInfo.findOne({ where: { login } });
    if (!user) {
      throw ApiError.badRequest('user with Login not found');
    }

    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.badRequest('incorrect password');
    }
    const userDto = new UserDto(user, email, role.toUpperCase());

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.userId, tokens.refreshToken);

    return { ...tokens, userInfo: userDto };
  }
  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    if (token !== 1) {
      throw ApiError.badRequest('something went wrong with logout');
    }
    return token;
  }
  async refresh(refreshToken) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw ApiError.UnauthorizedError();
    }

    const user = await UserInfo.findByPk(userData.userId);
    const userDto = new UserDto(
      user,
      userData.email,
      userData.role.toUpperCase()
    );

    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.userId, tokens.refreshToken);

    return { ...tokens, userInfo: userDto };
  }
}

module.exports = new UserService();
