const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class OnlinePaymentController {
  async createPayment(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getPayment(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getPayments(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new OnlinePaymentController();
