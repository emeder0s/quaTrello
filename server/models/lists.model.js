const DataTypes = require('sequelize');

ListsModel = {
    create: async (sequelize) => {
        const Lists = sequelize.define('lists', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name_: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fk_id_board: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            timestamps: false
        });

        return Lists;

    }
}

module.exports = ListsModel;