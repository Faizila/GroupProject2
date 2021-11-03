const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Exercises extends Model {}

Exercises.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        exercise_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_start: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_end: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        exercise_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        starting_tip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ending_tip: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'exercises',
    }
);

module.exports = Exercises;