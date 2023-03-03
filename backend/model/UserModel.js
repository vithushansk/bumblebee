const database = require('../config/database');
const {DataTypes, Sequelize} = require('sequelize');

const User = database.define('User',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },

    password:{
        type:DataTypes.STRING,
        allowNull:false
    },

    userType:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

module.exports = User;