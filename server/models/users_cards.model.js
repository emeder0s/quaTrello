const DataTypes = require('sequelize');

Users_cardsModel = {
    create: async (sequelize) => {
        const Users_cards = sequelize.define('users_cards', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            notifications: {
                type: DataTypes.BOOLEAN,
                allowNull: true
            },
            fk_id_user: {
                type: DataTypes.INTEGER,
                allowNull: true
            },            
            fk_id_card: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
        }, {
            timestamps: false
        });

        return Users_cards;

    }
}

module.exports = Users_cardsModel;