const database = require('../config/database');
const {DataTypes} = require('sequelize');
const InstallmentPlan = require('./InstallmentPlanModel');
const Customer = require('./CustomerModel');
const Stock = require('./StockModel');

const Payment = database.define('Payment',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    loanBalance:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },

    usedAmount:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    }
});

// .hasMany(Stock,{foreignKey:'product_id'});
InstallmentPlan.hasOne(Payment,{foreignKey:'installment_plan_id'});
Customer.hasMany(Payment,{foreignKey:'customer_id'});

module.exports = Payment;