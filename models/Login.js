const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Login extends Model {}

Login.init(
    {
        id : {
        type: DataTypes.INTEGER,
        autoincrement: true,
        allowNull: false,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primarykey: true,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                len: [8]
            }
        }
    },
    {
        sequelize,
        model: 'login'
    }
);

module.exports = Login;