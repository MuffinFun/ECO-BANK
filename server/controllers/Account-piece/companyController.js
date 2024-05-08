const { Company, CompanyInfo } = require('../../models/models');
const ApiError = require('../../error/ApiError');
const sequelize = require('sequelize');

class companyController {
  async createCompany(req, res) {
    try {
      const {
        companyName,
        companyPhoneNumber,
        companyAdress,
        countOfBuildings,
        companyPrice,
        idAccount,
      } = req.body;

      const company = await Company.create({
        company_name: companyName,
        user_company_id: idAccount,
      });
      const companyInfo = await CompanyInfo.create({
        company_adress: companyAdress,
        company_phone_number: companyPhoneNumber,
        count_of_buildings: countOfBuildings,
        company_price: companyPrice,
        company_id: company.id_company,
      });

      console.log('uraaaa');
      return res.json([company, companyInfo]);
    } catch (error) {
      ApiError.badRequest(error.message);
    }
  }
  async getCompanies(req, res) {
    const company = await Company.findAll({
      include: { model: CompanyInfo, as: 'company_info' },
    });
    return res.json(company);
  }
}

module.exports = new companyController();
