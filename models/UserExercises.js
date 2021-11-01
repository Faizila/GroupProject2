const { Model, DataTypes } = require('sequelize');
const sequelize = require('..config/connection');

class UserExercises extends Model {}

UserExercises.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primarykey: true,
            autoincrement: true,
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
            type: DataTypes.INTEGER,
            unique: true,
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