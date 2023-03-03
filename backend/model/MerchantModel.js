const database = require('../config/database');
const {DataTypes} = require('sequelize');
const User = require('./UserModel');

const Merchant = database.define('Merchant',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    name:{
        type:DataTypes.STRING,
        allowNull:false
    },

    address:{
        type:DataTypes.STRING,
        allowNull:false
    },

    telephone:{
        type:DataTypes.STRING,
        allowNull:false
    },

    proprietor :{
        type:DataTypes.STRING,
        allowNull:false
    },
    
    mobile:{
        type:DataTypes.STRING,
        allowNull:false
    },
});

User.hasOne(Merchant,{foreignKey:'user_id'});


module.exports = Merchant;

