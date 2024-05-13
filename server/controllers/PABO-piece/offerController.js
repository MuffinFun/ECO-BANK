const { Offer, OfferInfo } = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class OfferController {
  async createOffer(req, res) {
    let {
      offerName,
      offerType,
      offerPrice,
      offerComission,
      longterm,
      offerConfirmed,
      offerDescription,
      idCompanyOffer,
      idPersonOffer,
    } = req.body;

    let { offerImg } = req.files;

    let fileName = `offer__${uuid.v4()}.png`;

    offerImg.mv(
      path.resolve(__dirname, '..', '..', 'static', 'offers', fileName)
    );

    const offer = await Offer.create(
      {
        offer_name: offerName,
        offer_img: fileName,
        company_offer_id: idCompanyOffer || null,
        person_offer_id: idPersonOffer || null,
        offer_info: {
          offer_type: offerType,
          offer_price: offerPrice,
          offer_comission: offerComission,
          longterm,
          offer_confirmed: offerConfirmed,
          offer_description: offerDescription,
        },
      },
      { include: { model: OfferInfo, as: 'offer_info' } }
    );

    return res.json(offer);
  }
  async getOffer(req, res) {
    const { id_offer } = req.params;
    const offers = await Offer.findOne({
      include: { model: OfferInfo, where: { offer_id: id_offer } },
    });
    return res.json(offers);
  }
  async getOffers(req, res) {
    const offer = await Offer.findAll({
      include: { model: OfferInfo, as: 'offer_info' },
    });
    return res.json(offer);
  }
}

module.exports = new OfferController();
