const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Genres', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    }, {timestamps: false, freezeTableName: true})
}