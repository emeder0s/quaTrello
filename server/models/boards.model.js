const DataTypes = require('sequelize');

BoardsModel = {
    create: async (sequelize) => {
        const Boards = sequelize.define('boards', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name_: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_access: {
                type: DataTypes.DATE,
            },
            visibility: {
                type: DataTypes.STRING,
                allowNull: false
            },
            configuration: {
                type: DataTypes.STRING,
                allowNull: true
            },
            fk_id_workspace: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            fk_id_user: {
                type: DataTypes.INTEGER,
                allowNull: true
            }
        }, {
            timestamps: false
        });

        return Boards;

    }
}

module.exports = BoardsModel;
