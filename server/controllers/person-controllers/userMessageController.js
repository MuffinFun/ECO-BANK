const { Op } = require('sequelize');
const ApiError = require('../../error/ApiError');
const { UserMessage } = require('../../models/models');

class userMessageController {
  async createMessage(req, res, next) {
    try {
      const { message, personId } = req.body;

      const userMessage = await UserMessage.create({
        message,
        person_message_id: personId,
      });

      return res.json(userMessage);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getMessages(req, res, next) {
    try {
      const { personId, messageText } = req.params;

      if (!messageText) {
        const messages = await UserMessage.findAndCountAll({
          where: { person_message_id: personId },
        });

        return res.json(messages);
      }

      const message = await UserMessage.findAll({
        where: {
          person_message_id: personId,
          message: {
            [Op.like]: `%${messageText}%`,
          },
        },
      });
      return res.json(message);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAllMessages(req, res, next) {
    try {
      const { personId } = req.params;

      const messages = await UserMessage.findAndCountAll({
        where: { person_message_id: personId },
      });

      return res.json(messages);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new userMessageController();
