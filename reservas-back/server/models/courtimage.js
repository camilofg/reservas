'use strict';
module.exports = (sequelize, DataTypes) => {
  const CourtImage = sequelize.define('CourtImage', {
    fileName: DataTypes.STRING
  }, {});
  CourtImage.associate = function(models) {
    // associations can be defined here
    CourtImage.belongsTo(models.Court, {foreignKey: 'courtId'});
  };
  return CourtImage;
};