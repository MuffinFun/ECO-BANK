'use strict';

const { Company, CompanyInfo } = require('../models/models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    Company.hasOne(CompanyInfo, {
      foreignKey: 'company_id',
      sourceKey: 'company_id',
      as: 'company_info',
    });
    CompanyInfo.belongsTo(Company, {
      foreignKey: 'company_id',
      targetKey: 'company_id',
      as: 'company_info',
    });
  },

  async down(queryInterface, Sequelize) {
    Company.hasMany(CompanyInfo, { foreignKey: 'company_id' });
    Company.belongsTo(CompanyInfo, { foreignKey: 'company_id' });
  },
};
