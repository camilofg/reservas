'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    id: {type: DataTypes.INTEGER,autoIncrement: true, primaryKey: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: false},
    mail: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: true},
    cellphone: {type: DataTypes.STRING, allowNull: true},
    whatsapp: {type: DataTypes.STRING, allowNull: true}
  }, {});
  Place.associate = (models) => {
    // associations can be defined here
    // Place.hasMany(models.Court, {
    //   foreignKey: 'placeId'
    // });
  };
  return Place;
};