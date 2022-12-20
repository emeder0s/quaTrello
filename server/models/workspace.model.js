const DataTypes = require('sequelize');

WorkspacesModel = {
    create: async (sequelize) => {
        const Workspaces = sequelize.define('workspaces', {
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
            }
        }, {
            timestamps: false
        });

        return Workspaces;

    }
}

module.exports = WorkspacesModel;
