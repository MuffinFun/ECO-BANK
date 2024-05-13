const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class BillsController {
  async createBill(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getBill(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getBills(req, res) {
    try {
      return res.send('cool');
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new BillsController();
