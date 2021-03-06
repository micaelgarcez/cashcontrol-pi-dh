const { Model, DataTypes } = require('sequelize');

class Receitas extends Model {
    static init(connection) {
        super.init({
            data_receita: DataTypes.DATE,
            valor: DataTypes.DECIMAL(10,2),
            obs: DataTypes.STRING
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario'});
        this.belongsTo(models.Carteira, { foreignKey: 'carteira_id', as: 'carteira'});
        this.belongsTo(models.tiporeceitas, { foreignKey: 'tiporeceita_id', as: 'tiporeceita'});
    }
    
}

module.exports = Receitas;