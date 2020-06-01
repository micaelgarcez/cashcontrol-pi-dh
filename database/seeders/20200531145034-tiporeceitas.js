'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('tiporeceitas', 
    [
      {
        usuario_id: 1,
        nome: 'Salário'
      },
      {
        usuario_id: 1,
        nome: 'Férias'
      }
    ], {}),

    down: (queryInterface) => queryInterface.bulkDelete('tiporeceitas', null, {}),
};
