'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('movimentos', { 
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
      carteira_id_transf: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      id_transf: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      despesa_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      receita_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      tipo_mov: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      valor_mov: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
      },
      data_mov: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('movimentos');
  }
  
};

