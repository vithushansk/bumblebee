const database = require('../config/database');
const {DataTypes} = require('sequelize');

const Order = database.define('Order',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    grandTotal:{
        type:DataTypes.DOUBLE,
        allowNull:false
    },
});


module.exports = Order;


