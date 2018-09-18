'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaceImage = sequelize.define('PlaceImage', {
    fileName: DataTypes.STRING
  }, {});
  PlaceImage.associate = function(models) {
    // associations can be defined here
    PlaceImage.belongsTo(models.Place, {foreignKey: 'placeId'});
  };
  return PlaceImage;
};