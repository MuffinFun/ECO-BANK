const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const { Tax, TaxInfo } = require('../../models/models');

class TaxController {
  async createTax(req, res) {
    try {
      const { name, price, autopay, checknum, operationCardName, personId } =
        req.body;

      let { img } = req.files;

      let fileName = `tax__${uuid.v4()}.png`;

      img.mv(
        path.resolve(
          __dirname,
          '..',
          '..',
          'static',
          'person-things',
          'taxes',
          fileName
        )
      );

      const tax = await Tax.create(
        {
          tax_name: name,
          tax_img: fileName,
          person_tax_id: personId,
          tax_info: {
            tax_price: price,
            tax_autopay: autopay,
            tax_checknum: checknum,
            operation_card_name: operationCardName,
          },
        },
        { include: { model: TaxInfo, as: 'tax_info' } }
      );

      return res.json(tax);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getTax(req, res) {
    try {
      const { taxId } = req.params;
      const tax = await Tax.findOne({
        where: { id_tax: taxId },
        include: { model: TaxInfo, as: 'tax_info' },
      });

      return res.json(tax);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getTaxes(req, res) {
    try {
      const taxes = await Tax.findAll({
        include: { model: TaxInfo, as: 'tax_info' },
      });
      return res.json(taxes);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new TaxController();
