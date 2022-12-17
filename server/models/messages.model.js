const DataTypes = require('sequelize');

MessagesModel = {
    create: async (sequelize) => {
        const Messages = sequelize.define('messages', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            text_: {
                type: DataTypes.STRING,
                allowNull: false
            },
            date_:{
                type: DataTypes.DATE,
                allowNull: true
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

        return Messages;

    }
}

module.exports = MessagesModel;