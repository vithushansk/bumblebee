const {Sequelize} = require('sequelize');
const Path = require('path');
const dotEnv = require('dotenv');
dotEnv.config({path:Path.join(__dirname,'../config/config.env')});

const sequelize = new Sequelize(process.env.DB_DATABASE,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:"mysql"
});

sequelize.authenticate().then(()=>{
    console.log(`Database Connected!`);
    console.log(`Database Port is : ${process.env.DB_PORT}`);
}).catch(error =>{
    console.log(error);
})

const db ={};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('../models/userModel')(sequelize,Sequelize);
db.customers = require('../models/customerModel')(sequelize,Sequelize);
db.products = require('../models/productModel')(sequelize,Sequelize);
db.categories = require('../models/category')(sequelize,Sequelize);
db.brands = require('../models/brand')(sequelize,Sequelize);

module.exports = db;