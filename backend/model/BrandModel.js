const database = require('../config/database');
const {DataTypes} = require('sequelize');

const Brand = database.define('Brand',{
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

});

database.sync().then(()=>{
    console.log("Brand Table Created");
});

module.exports = Brand;

