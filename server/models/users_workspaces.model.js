const DataTypes = require('sequelize');

Users_workspacesModel = {
    create: async (sequelize) => {
        const Users_workspaces = sequelize.define('users_workspaces', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            role_: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fk_id_user: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            fk_id_workspace: {
                type: DataTypes.INTEGER,
                allowNull: true
            },            
        }, {
            timestamps: false
        });

        return Users_workspaces;

    }
}

module.exports = Users_workspacesModel;