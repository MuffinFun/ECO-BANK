const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { AccountFilling } = require('../../models/models');

class FillController {
  async createFill(req, res, next) {
    try {
      const { fillName, fillPercentage, personId } = req.body;

      const fill = await AccountFilling.create({
        fill_name: fillName,
        fill_percentage: fillPercentage,
        person_fill_id: personId,
      });

      return res.json(fill);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getFill(req, res, next) {
    try {
      const { fillId } = req.params;

      const fill = await AccountFilling.findOne({
        where: { id_filling: fillId },
      });

      return res.json(fill);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getFillings(req, res, next) {
    try {
      const fillings = await AccountFilling.findAll();

      return res.json(fillings);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new FillController();
