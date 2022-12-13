const DataTypes = require('sequelize');

tablesModel = {
    create: async (sequelize) => {
        const Tables = sequelize.define('tables', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name_: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            visibility: {
                type: DataTypes.STRING,
                allowNull: false
            },
            configuration: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fk_id_workspace: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            timestamps: false
        });

        return Tables;

    }
}

module.exports = TablesModel;
