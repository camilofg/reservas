'use strict';
module.exports = (sequelize, DataTypes) => {
  const Court = sequelize.define('Court', {
    id: {type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true,allowNull: false},
    name: {type: DataTypes.STRING,allowNull: false},
    players: {type: DataTypes.INTEGER,allowNull: false},
    roofed: {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: false},
    illuminated: {type: DataTypes.BOOLEAN,allowNull: false,defaultValue: false},
  }, {});
  Court.associate = function(models) {
    // associations can be defined here
    Court.belongsTo(models.Place, {foreignKey: 'placeId'});
  };
  return Court;
};