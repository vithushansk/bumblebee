const database = require('../config/database');
const {DataTypes} = require('sequelize');
const Product = require('./ProductModel');
const Order = require('./OrderModel');

const OrderDetail = database.define('OrderDetail',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    quantity:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },

    subTotal:{
        type:DataTypes.DOUBLE,
        allowNull:false
    }
});

Product.hasMany(OrderDetail,{foreignKey:'product_id'});
Order.hasMany(OrderDetail,{foreignKey:'order_id'});

module.exports = OrderDetail;


