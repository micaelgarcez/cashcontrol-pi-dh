'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'categorias',
        'cor',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'categorias',
        'icone',
        {
          type: Sequelize.STRING
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('categorias', 'cor'),
      queryInterface.removeColumn('categorias', 'icone')
    ]);
  }
};
