const { Model, DataTypes } = require('sequelize');

class tiporeceitas extends Model {
    static init(connection) {
        super.init({
            nome: DataTypes.STRING
        }, {
            sequelize: connection,
        })
    }

    static associate(models) {
        this.belongsTo(models.Usuario, { foreignKey: 'usuario_id', as: 'usuario'});
    }
}

module.exports = tiporeceitas;