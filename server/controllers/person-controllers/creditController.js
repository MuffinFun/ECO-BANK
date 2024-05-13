const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class CreditController {
  async createCredit(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getCredit(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getCredits(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new CreditController();
