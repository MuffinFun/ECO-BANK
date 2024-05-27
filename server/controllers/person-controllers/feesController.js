const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { Fees, FeesInfo } = require('../../models/models');

class FeesController {
  async createFees(req, res, next) {
    try {
      const { name, price, autopay, checknum, operationCardName, personId } =
        req.body;

      let { img } = req.files;

      let fileName = `fees__${uuid.v4()}.png`;

      img.mv(
        path.resolve(
          __dirname,
          '..',
          '..',
          'static',
          'person-things',
          'feeses',
          fileName
        )
      );

      const fees = await Fees.create(
        {
          fees_name: name,
          fees_img: fileName,
          person_fees_id: personId,
          fees_info: {
            fees_price: price,
            fees_autopay: autopay,
            fees_checknum: checknum,
            operation_card_name: operationCardName,
          },
        },
        { include: { model: FeesInfo, as: 'fees_info' } }
      );

      return res.json(fees);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getFees(req, res, next) {
    try {
      const { feesId } = req.params;
      const fees = await Fees.findOne({
        where: { id_fees: feesId },
        include: { model: FeesInfo, as: 'fees_info' },
      });

      return res.json(fees);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getFeeses(req, res, next) {
    try {
      const feeses = await Fees.findAll({
        include: { model: FeesInfo, as: 'fees_info' },
      });
      return res.json(feeses);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new FeesController();
