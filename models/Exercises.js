const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class Exercises extends Model {}

Exercises.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoincrement: true
        },
        exercise_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_start: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        img_end: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'exercises',
    }
)