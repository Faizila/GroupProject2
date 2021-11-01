const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserExercises extends Model {}

UserExercises.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        exercise_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'exercises',
                key: 'id',
            }
        },
        login_email: {
            type: DataTypes.STRING,
            isEmail: true,
            references: {
                model: 'login',
                key: 'email',
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'user_exercises',
    } 
);

module.exports = UserExercises;