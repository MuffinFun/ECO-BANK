const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { Credit } = require('../../models/models');

class CreditController {
  async createCredit(req, res, next) {
    try {
      const { creditName, creditLimit, creditSum, personId } = req.body;

      const credit = await Credit.create({
        credit_name: creditName,
        credit_limit: creditLimit,
        credit_sum: creditSum,
        person_credit_id: personId,
      });

      return res.json(credit);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getCredit(req, res, next) {
    try {
      const { creditId } = req.params;
      const credit = await Credit.findOne({
        where: { id_credit: creditId },
      });

      return res.json(credit);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getCredits(req, res, next) {
    try {
      const credits = await Credit.findAll();
      return res.json(credits);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new CreditController();
