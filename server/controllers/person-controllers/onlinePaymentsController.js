const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { OnlinePayment, OnlinePaymentInfo } = require('../../models/models');

class OnlinePaymentController {
  async createPayment(req, res, next) {
    try {
      const { name, price, autopay, checknum, operationCardName, personId } =
        req.body;

      let { img } = req.files;

      let fileName = `online-payments__${uuid.v4()}.png`;

      img.mv(
        path.resolve(
          __dirname,
          '..',
          '..',
          'static',
          'person-things',
          'online-payments',
          fileName
        )
      );

      const payment = await OnlinePayment.create(
        {
          payment_name: name,
          payment_img: fileName,
          person_payment_id: personId,
          payment_info: {
            payment_price: price,
            payment_autopay: autopay,
            payment_checknum: checknum,
            operation_card_name: operationCardName,
          },
        },
        { include: { model: OnlinePaymentInfo, as: 'payment_info' } }
      );

      return res.json(payment);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getPayment(req, res, next) {
    try {
      const { paymentId } = req.params;
      const payment = await OnlinePayment.findOne({
        where: { id_payment: paymentId },
        include: { model: OnlinePaymentInfo, as: 'payment_info' },
      });

      return res.json(payment);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getPayments(req, res, next) {
    try {
      const payments = await OnlinePayment.findAll({
        include: { model: OnlinePaymentInfo, as: 'payment_info' },
      });
      return res.json(payments);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new OnlinePaymentController();
