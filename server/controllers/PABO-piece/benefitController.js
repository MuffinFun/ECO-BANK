const { Benefit, AvailableBenefit } = require('../../models/models');
const ApiError = require('../../error/ApiError');
const uuid = require('uuid');
const path = require('path');

class BenefitController {
  async createBenefit(req, res) {
    try {
      let { availableBenefitName, availableBenefitDescription } = req.body;
      let { availableBenefitImg } = req.files;

      let fileName = `${uuid.v4()}.png`;

      availableBenefitImg.mv(
        path.resolve(__dirname, '..', 'static', 'benefits', fileName)
      );

      const benefit = await AvailableBenefit.create({
        availableBenefitName,
        availableBenefitDescription,
        availableBenefitImg: fileName,
      });

      return res.json(benefit);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async addBenefit(req, res) {
    try {
      let { benefitName } = req.body;
      let { benefitImg } = req.files;

      let fileName = `${uuid.v4()}.png`;

      benefitImg.mv(
        path.resolve(__dirname, '..', 'static', 'benefits', fileName)
      );

      const benefit = await Benefit.create({
        benefitName,
        benefitImg: fileName,
      });

      return res.json(benefit);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getMyBenefits(req, res) {
    try {
      const benefits = await Benefit.findAll();
      return res.json(benefits);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getBenefits(req, res) {
    try {
      const availableBenefits = await AvailableBenefit.findAll();
      return res.json(availableBenefits);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new BenefitController();
