const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { user_token } = require('../../models');
const ApiError = require('../../error/ApiError');
dotenv.config();

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET_KEY, {
      expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET_KEY, {
      expiresIn: '30d',
    });

    return { accessToken, refreshToken };
  }
  async saveToken(userId, refreshToken) {
    try {
      const tokenData = await user_token.findOne({
        where: { user_info_id: userId },
      });
      if (tokenData) {
        tokenData.refresh_token = refreshToken;
        return tokenData.save();
      }
      const token = await user_token.create({
        user_info_id: userId,
        refresh_token: refreshToken,
      });

      return token;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET_KEY);
      return userData;
    } catch (error) {
      return null;
    }
  }
  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET_KEY);
      return userData;
    } catch (error) {
      return null;
    }
  }

  async removeToken(refreshToken) {
    const tokenData = await user_token.destroy({
      where: { refresh_token: refreshToken },
    });

    return tokenData;
  }
  async findToken(refreshToken) {
    const tokenData = await user_token.findOne({
      where: { refresh_token: refreshToken },
    });

    return tokenData;
  }
}

module.exports = new TokenService();
