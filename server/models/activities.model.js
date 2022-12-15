const DataTypes = require('sequelize');

ActivitiesModel = {
    create: async (sequelize) => {
        const Activities = sequelize.define('activities', {
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
            fk_id_card: {
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

        return Activities;

    }
}

module.exports = ActivitiesModel;