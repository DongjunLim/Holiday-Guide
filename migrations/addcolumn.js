'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.addColumn('calendar','day_of_the_week', { type: Sequelize.STRING,allowNull:false,defaultValue:'' });
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.removeColumn('calendar','day_of_the_week');
  }
};
