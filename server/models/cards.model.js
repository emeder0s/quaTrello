const DataTypes = require('sequelize');

CardsModel = {
    create: async (sequelize) => {
        const Cards = sequelize.define('cards', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: true
            },
            checklist: {
                type: DataTypes.STRING,
                allowNull: true
            },
            configuration: {
                type: DataTypes.STRING,
                allowNull: true
            },
            date_:{
                type: DataTypes.DATE,
                allowNull: true
            },
            fk_id_list: {
                type: DataTypes.INTEGER,
                allowNull: true
            }            


        }, {
            timestamps: false
        });

        return Cards;

    }
}

module.exports = CardsModel;