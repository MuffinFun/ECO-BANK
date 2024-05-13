const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class TaxController {
  async createTax(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getTax(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getTaxes(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new TaxController();
