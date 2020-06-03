'use strict';
module.exports = (sequelize, DataTypes) => {
  const employees = sequelize.define('employees', {
    EmpId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    deptId: DataTypes.INTEGER,
    locId: DataTypes.INTEGER
  },{
    freezeTableName: true
  });
  employees.associate = function(models) {          //association will help us to join the table as per relation.
    employees.belongsTo(models.department, {
      foreignKey: 'deptId',
      as: 'department'
    });
    employees.belongsTo(models.location, {
      foreignKey: 'locId',
      as: 'location'
    }); 
  } 

    // associations can be defined here
    return employees;
};