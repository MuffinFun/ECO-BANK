const {
  Partner,
  AvailablePartner,
  PersonPartner,
} = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class PartnerController {
  async createPartner(req, res) {
    try {
      let { availablePartnerName, availablePartnerDescription } = req.body;
      let { availablePartnerImg } = req.files;

      let fileName = `partner__${uuid.v4()}.png`;

      availablePartnerImg.mv(
        path.resolve(__dirname, '..', '..', 'static', 'partners', `${fileName}`)
      );

      const newPartner = await AvailablePartner.create({
        availablePartnerName,
        availablePartnerDescription,
        availablePartnerImg: fileName,
      });

      return res.json(newPartner);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async addPartner(req, res) {
    try {
      const { id_target, id_user } = req.params;

      const { availablePartnerName, availablePartnerImg } =
        await AvailablePartner.findOne({
          where: { id_availablePartner: id_target },
        });

      const userPartner = await Partner.create({
        partnerName: availablePartnerName,
        partnerImg: availablePartnerImg,
      });

      PersonPartner.create({
        partnerIdPartner: userPartner.id_partner,
        userPersonIdPerson: id_user,
      });

      return res.json(userPartner);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getMyPartners(req, res) {
    try {
      const myPartners = await Partner.findAll();
      return res.json(myPartners);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getPartners(req, res) {
    try {
      const availablePartners = await AvailablePartner.findAll();
      return res.json(availablePartners);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new PartnerController();