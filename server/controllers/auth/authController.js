const { UserInfo } = require('../../models/models');
const { user_token } = require('../../models');

const ApiError = require('../../error/ApiError');

class authController {
  async test(req, res) {
    try {
      const { login, password, activationLink, isActivated, refreshToken } =
        req.body;

      const info = await UserInfo.create({
        login,
        password,
        activation_link: activationLink,
        is_activated: isActivated,
      });

      const test = await user_token.create({
        refresh_token: refreshToken,
        user_info_id: info.id_user_info,
      });
      return res.send({ info, test });
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new authController();
