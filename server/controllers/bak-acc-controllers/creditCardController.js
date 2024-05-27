const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');
const {
  CreditCard,
  CreditCardInfo,
  CreditCardType,
} = require('../../models/models');

class CreditCardController {
  async createCreditCard(req, res, next) {
    try {
      let { cardName, expiresDate, cvv, pincode, nfc, cardTypeName, bankId } =
        req.body;

      let fileNameCard, fileNameType;

      if (req.files) {
        let { cardImg, cardTypeImg } = req.files;

        fileNameCard = `credit-card__${uuid.v4()}.png`;
        fileNameType = `credit-card-type__${uuid.v4()}.png`;

        cardTypeImg.mv(
          path.resolve(
            __dirname,
            '..',
            '..',
            'static',
            'credit-cards',
            fileNameType
          )
        );
        cardImg.mv(
          path.resolve(
            __dirname,
            '..',
            '..',
            'static',
            'credit-cards',
            fileNameCard
          )
        );
      }

      const expiresDateCorrect = new Date(expiresDate);

      const creditCard = await CreditCard.create(
        {
          card_name: cardName,
          card_img: fileNameCard,
          bank_id: bankId,
          credit_card_info: {
            expires_date: expiresDateCorrect,
            cvv,
            pincode,
            nfc,
            credit_card_type_info: [
              {
                card_type_name: cardTypeName,
                type_img: fileNameType,
              },
            ],
          },
        },
        {
          include: {
            model: CreditCardInfo,
            as: 'credit_card_info',
            include: { model: CreditCardType, as: 'credit_card_type_info' },
          },
        }
      );

      return res.json(creditCard);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getCreditCard(req, res, next) {
    try {
      const { cardId } = req.params;
      const creditCard = await CreditCard.findOne({
        where: { id_card: cardId },
        include: {
          model: CreditCardInfo,
          as: 'credit_card_info',
          include: { model: CreditCardType, as: 'credit_card_type_info' },
        },
      });
      return res.json(creditCard);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getCreditCards(req, res, next) {
    try {
      const cards = await CreditCard.findAll({
        include: {
          model: CreditCardInfo,
          as: 'credit_card_info',
          include: { model: CreditCardType, as: 'credit_card_type_info' },
        },
      });
      return res.json(cards);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new CreditCardController();
