const database = require('../config/database');
const {DataTypes} = require('sequelize');

const InstallmentPlan = database.define('InstallmentPlan',{
    id:{
        type:DataTypes.BIGINT,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },

    plan:{
        type:DataTypes.STRING,
        allowNull:false
    },

});

database.sync().then(()=>{
    console.log("Installment Plan Table Created");
});

module.exports = InstallmentPlan;

