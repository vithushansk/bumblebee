const database = require('../config/database');
const {DataTypes} = require('sequelize');

const Product = require('../model/ProductModel');

const Stock = database.define('Stock',{
    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    
});

Product.hasMany(Stock,{foreignKey:'product_id'});

database.sync().then(()=>{
    console.log("Stock Table Created");
});

module.exports = Stock;

