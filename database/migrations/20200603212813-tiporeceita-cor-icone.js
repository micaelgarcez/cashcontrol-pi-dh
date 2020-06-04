'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'tiporeceitas',
        'cor',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'tiporeceitas',
        'icone',
        {
          type: Sequelize.STRING
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('tiporeceitas', 'cor'),
      queryInterface.removeColumn('tiporeceitas', 'icone')
    ]);
  }
};
