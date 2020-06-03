const { Model, DataTypes } = require('sequelize');

class Movimentos extends Model {
    static init(connection) {
        super.init({
            carteira_id_transf: DataTypes.INTEGER,
            id_transf: DataTypes.INTEGER,
            despesa_id: DataTypes.INTEGER,
            receita_id: DataTypes.INTEGER,
            tipo_mov: DataTypes.INTEGER,
            valor_mov: DataTypes.DECIMAL(10,2),
            data_mov: DataTypes.DATE
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario'});
        this.belongsTo(models.Carteira, { foreignKey: 'carteira_id', as: 'carteira'});
        //this.belongsTo(models.Carteira, { foreignKey: 'carteira_id_transf', as: 'carteira_transf'});
        //this.belongsTo(models.Despesa, { foreignKey: 'despesa_id', as: 'despesa'});
        //this.belongsTo(models.Receitas, { foreignKey: 'receita_id', as: 'receita'});
    }
    
}

module.exports = Movimentos;