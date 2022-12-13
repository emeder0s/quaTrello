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
            firstName: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            lastName: {
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
            config: {
                type: DataTypes.STRING,
            }
        }, {
            timestamps: false
        });

        return Users;

    }
}

module.exports = userModel;
