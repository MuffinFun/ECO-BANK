const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class FeesController {
  async createFees(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getFees(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getFeeses(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new FeesController();
