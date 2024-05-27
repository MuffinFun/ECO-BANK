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
}

module.exports = new TokenService();
