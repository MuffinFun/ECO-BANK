'use strict';
const { UserInfo } = require('./models');

module.exports = (sequelize, DataTypes) => {
  const UserToken = sequelize.define('user_token', {
    id_user_token: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    refresh_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_info_id: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'user_infos',
          schema: 'public',
        },
        key: 'id_user_info',
      },
    },
  });
  UserToken.associate = (models) => {
    // relations
  };
  return UserToken;
};
