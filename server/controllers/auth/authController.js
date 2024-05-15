const { UserInfo } = require('../../models/models');
const { UserToken } = require('../../models/usertoken');
const ApiError = require('../../error/ApiError');

class authControllers {
  async test(req, res) {
    try {
      const { login, password, refreshToken } = req.body;

      const info = await UserInfo.create({
        password,
        login,
      });
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new authControllers();
