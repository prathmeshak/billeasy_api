'use strict';
module.exports = (sequelize, DataTypes) => {
  const location = sequelize.define('location', {
    locId:  {
      allowNull: false,
      unique:true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    cityName: DataTypes.STRING
  },{
    freezeTableName: true
  });
  location.associate = function(models) {
    // associations can be defined here
  };
  return location;
};