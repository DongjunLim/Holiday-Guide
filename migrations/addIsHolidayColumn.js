'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('calendar','is_holiday', { type: Sequelize.BOOLEAN,allowNull:false,defaultValue:0 });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('calendar','is_holiday');

  }
};
