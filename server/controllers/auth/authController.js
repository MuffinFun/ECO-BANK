const userService = require('../../service/auth-services/userService');
const ApiError = require('../../error/ApiError');

class authController {
  async registration(req, res, next) {
    try {
      const { email, login, password } = req.body;
      const userData = await userService.registration(login, email, password);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }
  async login(req, res, next) {
    try {
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async logout(req, res, next) {
    try {
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async refresh(req, res, next) {
    try {
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getUsers(req, res, next) {
    try {
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new authController();
