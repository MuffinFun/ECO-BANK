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
      companyId,
      personId,
    } = req.body;

    let fileName;

    if (req.files) {
      let { offerImg } = req.files;

      fileName = `offer__${uuid.v4()}.png`;

      offerImg.mv(
        path.resolve(__dirname, '..', '..', 'static', 'offers', fileName)
      );
    }

    const offer = await Offer.create(
      {
        offer_name: offerName,
        offer_img: fileName || 'none',
        company_offer_id: companyId || null,
        person_offer_id: personId || null,
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
    const { offerId } = req.params;
    const offers = await Offer.findOne({
      where: { id_offer: offerId },
      include: {
        model: OfferInfo,
        as: 'offer_info',
      },
    });
    return res.json(offers);
  }
  async getOffers(req, res) {
    const { typeUserId, role } = req.params;

    if (role.toUpperCase() === 'PERSON') {
      const offers = await Offer.findAndCountAll({
        where: { person_offer_id: typeUserId },
      });

      return res.json(offers);
    } else if (role.toUpperCase() === 'COMPANY') {
      const offers = await Offer.findAndCountAll({
        where: { company_offer_id: typeUserId },
      });

      return res.json(offers);
    } else {
      throw new Error('something went wrong');
    }
  }
}

module.exports = new OfferController();
