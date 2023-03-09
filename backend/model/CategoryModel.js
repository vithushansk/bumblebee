const database = require('../config/database');
const {DataTypes} = require('sequelize');

const Category = database.define('Category',{
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
    console.log("Category Table Created");
});

module.exports = Category;

