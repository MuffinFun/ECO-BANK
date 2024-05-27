const {
  Partner,
  AvailablePartner,
  UserPerson,
  Company,
} = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class PartnerController {
  async createPartner(req, res, next) {
    try {
      let { availablerName, availableDescription } = req.body;

      let fileName;

      if (req.files) {
        let { availableImg } = req.files;

        fileName = `partner__${uuid.v4()}.png`;

        availableImg.mv(
          path.resolve(
            __dirname,
            '..',
            '..',
            'static',
            'partners',
            `${fileName}`
          )
        );
      }

      const partner = await AvailablePartner.create({
        available_partner_name: availablerName,
        available_partner_description: availableDescription,
        available_partner_img: fileName,
      });

      return res.json(partner);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async addPartner(req, res, next) {
    try {
      let { name, personId, companyId } = req.body;

      let fileName;

      if (req.files) {
        let { img } = req.files;

        fileName = `partner__${uuid.v4()}.png`;

        img.mv(
          path.resolve(__dirname, '..', '..', 'static', 'partners', fileName)
        );
      }

      const partner = await Partner.create({
        partner_name: name,
        partner_img: fileName,
      });

      if (companyId) {
        await partner.addCompany(+companyId);
      } else if (personId) {
        await partner.addPerson(+personId);
      } else {
        throw new Error('something went wrong in partner controller');
      }

      return res.json(partner);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getPartners(req, res, next) {
    try {
      const { role } = req.params;
      if (role.toUpperCase() === 'PERSON') {
        const partners = await Partner.findAndCountAll({
          include: {
            model: UserPerson,
            as: 'person',
          },
        });

        return res.json(partners);
      } else if (role.toUpperCase() === 'COMPANY') {
        const partners = await Partner.findAndCountAll({
          include: {
            model: Company,
            as: 'company',
          },
        });

        return res.json(partners);
      }
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAvailablePartners(req, res, next) {
    try {
      const availablePartners = await AvailablePartner.findAll();
      return res.json(availablePartners);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new PartnerController();
