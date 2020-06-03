'use strict';
module.exports = (sequelize, DataTypes) => {
  const department = sequelize.define('department', {
    deptId: {
      allowNull: false,
      unique: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    deptName: DataTypes.STRING,
    deptCity: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  department.associate = function(models) {
    // associations can be defined here
  };
  return department;
};