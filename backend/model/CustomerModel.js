const database = require('../config/database');
const {DataTypes} = require('sequelize');
const User = require('./UserModel');

const Customer = database.define('Customer',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    firstname:{
        type:DataTypes.STRING,
        allowNull:false
    },

    lastname:{
        type:DataTypes.STRING,
        allowNull:false
    },

    dateOfBirth:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },

    mobile:{
        type:DataTypes.STRING,
        allowNull:false
    },

    avatar:{
        type:DataTypes.STRING,
        allowNull:true
    }
});

User.hasOne(Customer,{foreignKey:'user_id'});

module.exports = Customer;

