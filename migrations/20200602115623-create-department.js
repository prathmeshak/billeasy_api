'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('department', {
      deptId: {
        allowNull: false,
        unique: true,
        primaryKey: true,  // It will work as a foreign key for employee table.
        type: Sequelize.INTEGER
      },
      deptName: {
        type: Sequelize.STRING
      },
      deptCity: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },{
      freezeTableName: true
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Departments');
  }
};