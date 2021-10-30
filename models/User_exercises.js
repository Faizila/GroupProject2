const {Model, DataTypes} = require('sequelize');
const sequelize = require('..config/connection');

class User_exercises extends Model {}

User_exercises.init(
    {
        id: {
            type: DataType.INTEGER,
            primarykey: true,
            autoincrement: true,
            allowNull: false
        },
        exercise_id: {
            type: DataType.INTEGER,
            allowNull: false,
            references: {
                model: 'exercises',
                key: 'id',
            }
        },
        login_email: {
            type: DataType.INTEGER,
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
)