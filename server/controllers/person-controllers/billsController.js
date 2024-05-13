const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { Bill, BillInfo } = require('../../models/models');

class BillsController {
  async createBill(req, res) {
    try {
      const { name, price, autopay, checknum, operationCardName, personId } =
        req.body;

      let { img } = req.files;

      let fileName = `bill__${uuid.v4()}.png`;

      img.mv(
        path.resolve(
          __dirname,
          '..',
          '..',
          'static',
          'person-things',
          'bills',
          fileName
        )
      );

      const bill = await Bill.create(
        {
          bill_name: name,
          bill_img: fileName,
          person_bill_id: personId,
          bill_info: {
            bill_price: price,
            bill_autopay: autopay,
            bill_checknum: checknum,
            operation_card_name: operationCardName,
          },
        },
        { include: { model: BillInfo, as: 'bill_info' } }
      );

      return res.json(bill);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getBill(req, res) {
    try {
      const { billId } = req.params;
      const bill = await Bill.findOne({
        where: { id_bill: billId },
        include: { model: BillInfo, as: 'bill_info' },
      });

      return res.json(bill);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getBills(req, res) {
    try {
      const bills = await Bill.findAll({
        include: { model: BillInfo, as: 'bill_info' },
      });
      return res.json(bills);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new BillsController();
