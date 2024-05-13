const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class MessageCenterController {
  async createMessage(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getMessage(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getMessages(req, res) {
    try {
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new MessageCenterController();
