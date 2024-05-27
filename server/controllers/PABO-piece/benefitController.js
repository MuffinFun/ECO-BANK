const {
  Benefit,
  AvailableBenefit,
  UserPerson,
  Company,
} = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class BenefitController {
  async createBenefit(req, res, next) {
    try {
      let { availableName, availableDescription } = req.body;

      let fileName;

      if (req.files) {
        let { availableImg } = req.files;

        fileName = `${uuid.v4()}.png`;

        availableImg.mv(
          path.resolve(__dirname, '..', '..', 'static', 'benefits', fileName)
        );
      }

      const benefit = await AvailableBenefit.create({
        available_benefit_name: availableName,
        available_benefit_description: availableDescription,
        available_benefit_img: fileName,
      });

      return res.json(benefit);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async addBenefit(req, res, next) {
    try {
      let { name, personId, companyId } = req.body;

      let fileName;

      if (req.files) {
        let { img } = req.files;

        fileName = `benefit__${uuid.v4()}.png`;

        img.mv(
          path.resolve(__dirname, '..', '..', 'static', 'benefits', fileName)
        );
      }

      const benefit = await Benefit.create({
        benefit_name: name,
        benefit_img: fileName,
      });

      if (companyId) {
        await benefit.addCompany(+companyId);
      } else if (personId) {
        await benefit.addPerson(+personId);
      } else {
        throw new Error('something went wrong in benefit controller');
      }

      return res.json(benefit);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getBenefits(req, res, next) {
    try {
      const { role } = req.params;
      if (role.toUpperCase() === 'PERSON') {
        const benefits = await Benefit.findAndCountAll({
          include: {
            model: UserPerson,
            as: 'person',
          },
        });

        return res.json(benefits);
      } else if (role.toUpperCase() === 'COMPANY') {
        const benefits = await Benefit.findAndCountAll({
          include: {
            model: Company,
            as: 'company',
          },
        });

        return res.json(benefits);
      } else {
        throw new Error('something went wrong');
      }
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getAvailableBenefits(req, res, next) {
    try {
      const availableBenefits = await AvailableBenefit.findAll();
      return res.json(availableBenefits);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new BenefitController();
