const { Company, CompanyInfo } = require('../../models/models');
const ApiError = require('../../error/ApiError');

class companyController {
  async createCompany(req, res) {
    try {
      const {
        companyName,
        companyPhoneNumber,
        companyAdress,
        countOfBuildings,
        companyPrice,
      } = req.body;

      const company = await Company.create({
        companyName,
      });

      if (company) {
        await CompanyInfo.create({
          companyPhoneNumber,
          companyAdress,
          countOfBuildings,
          companyPrice,
          companyId: company.id_company,
        });
      }

      return res.json(company);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
}

module.exports = new companyController();
