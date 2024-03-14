const { Offer, OfferInfo } = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class OfferController {
  async createOffer(req, res) {
    let { offerName } = req.body;
    let { offerImg } = req.files;

    let fileName = `${uuid.v4()}.png`;

    const offerInfo = {
      type: 'lol',
      price: 123,
      comission: 12,
      longterm: true,
      confirmed: false,
      description: 'sadasdasdasd',
    };

    offerImg.mv(
      path.resolve(__dirname, '..', '..', 'static', 'offers', fileName)
    );

    const offer = await Offer.create({
      offerName,
      offerImg: fileName,
    });

    if (offerInfo) {
      //offerInfo = JSON.parse(offerInfo);
      OfferInfo.create({
        offerType: offerInfo.type,
        offerPrice: offerInfo.price,
        offerComission: offerInfo.comission,
        longterm: offerInfo.longterm,
        offerConfirmed: offerInfo.confirmed,
        offerDescription: offerInfo.description,
        offerId: offer.id_offer,
      });
    }

    return res.json(offer);
  }
  async getOffers(req, res) {
    const { id_offer } = req.params;
    const offers = await Offer.findOne({
      include: { model: OfferInfo, where: { offerId: id_offer } },
    });
    return res.json(offers);
  }
  async getOffer(req, res) {
    const offer = await Offer.findAll();
    return res.json(offer);
  }
}

module.exports = new OfferController();
