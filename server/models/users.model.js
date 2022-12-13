const DataTypes = require('sequelize');

userModel = {
    create: async (sequelize) => {
        const Users = sequelize.define('users', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            first_name: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            pass: {
                type: DataTypes.STRING,
                allowNull: false
            },
            sector: {
                type: DataTypes.STRING,
                allowNull: true
            },
            avatar: {
                type: DataTypes.STRING,
                allowNull: true
            },
            configuration: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            timestamps: false
        });

        return Users;

    }
}

module.exports = userModel;