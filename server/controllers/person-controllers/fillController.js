const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class FillController {
  async createFill(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getFill(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getFillings(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new FillController();
