const userService = require('../../service/auth-services/userService');
const ApiError = require('../../error/ApiError');
const { validationResult } = require('express-validator');

class authController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return next(ApiError.badRequest('validation error', errors.array()));
      }

      const {
        email,
        login,
        password,
        role = process.env.DEFAULT_ROLE,
      } = req.body;

      const userData = await userService.registration(
        login,
        email,
        password,
        role
      );

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
      const {
        login,
        password,
        email,
        role = process.env.DEFAULT_ROLE,
      } = req.body;

      const userData = await userService.login(login, password, email, role);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }
  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;

      const token = await userService.logout(refreshToken);

      res.clearCookie('refreshToken');
      if (token === 1) {
        return res.json('logout has been succesfuly');
      }
    } catch (error) {
      next(error);
    }
  }
  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);

      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }
  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      next(error);
    }
  }
  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      return res.json(users);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new authController();
