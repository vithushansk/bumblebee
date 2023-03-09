const database = require('../config/database');
const {DataTypes} = require('sequelize');
const Brand = require('./BrandModel');
const Category = require('./CategoryModel');

const Product = database.define('Product',{
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

    sale_price:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
});

Brand.hasMany(Product,{foreignKey:'brand_id'});
Category.hasMany(Product,{foreignKey:'category_id'});

database.sync().then(()=>{
    console.log("Product Table Created");
});

module.exports = Product;

