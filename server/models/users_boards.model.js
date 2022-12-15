const DataTypes = require('sequelize');

Users_boardsModel = {
    create: async (sequelize) => {
        const Users_boards = sequelize.define('users_boards', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            role_:{
                type: DataTypes.STRING,
                allowNull: false
            },
            fk_id_board: {
                type: DataTypes.INTEGER,
                allowNull: true
            },            
            fk_id_user: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
        }, {
            timestamps: false
        });

        return Users_boards;

    }
}

module.exports = Users_boardsModel;