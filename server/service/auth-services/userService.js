const ApiError = require('../../error/ApiError');
const { UserInfo, UserAccount } = require('../../models/models');
const emailService = require('./emailService');
const tokenService = require('./tokenService');
const UserDto = require('../../dtos/auth-dtos/user-dto');

const bcrypt = require('bcrypt');
const uuid = require('uuid');

class UserService {
  async registration(login, email, password) {
    try {
      const emailCandidate = await UserAccount.findOne({ where: { email } });
      const loginCandidate = await UserInfo.findOne({ where: { login } });

      if (emailCandidate) {
        throw ApiError.badRequest(`User with email - ${email}, already exist!`);
      } else if (loginCandidate) {
        throw ApiError.badRequest(`This login already exist!`);
      }

      if (password.length < 7 || password.length > 20) {
        throw ApiError.badRequest('password length must be in 7-20 letters');
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

      const userDto = new UserDto(user, email);
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
}

module.exports = new UserService();
