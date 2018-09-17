'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {type: DataTypes.INTEGER,autoIncrement: true, primaryKey: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    mail: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};