const {Sequelize} = require('sequelize');
const Path = require('path');
const dotEnv = require('dotenv');
dotEnv.config({path:Path.join(__dirname,'./config.env')});

const dbConnection = new Sequelize(process.env.DB_DATABASE,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:"mysql"
});

dbConnection.authenticate().then(()=>{
    console.log(`Database Connected!`);
    console.log(`Application Port is : ${process.env.PORT}`);
    console.log(`Enviroment : ${process.env.NODE_ENV}`);
    console.log(`Database Port is : ${process.env.DB_PORT}`);
}).catch(error =>{
    console.log(error);
})

module.exports = dbConnection;