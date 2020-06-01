'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('receitas', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'usuarios', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      carteira_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'carteiras', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      tiporeceita_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'tiporeceitas', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      data_receita: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      valor: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      obs: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    
    });
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('receitas');
  }
  
};

