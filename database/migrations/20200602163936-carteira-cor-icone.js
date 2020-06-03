'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'carteiras',
        'cor',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'carteiras',
        'icone',
        {
          type: Sequelize.STRING
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('carteiras', 'cor'),
      queryInterface.removeColumn('carteiras', 'icone')
    ]);
  }
};
