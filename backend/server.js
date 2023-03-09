const app = require('./app');
const dbConnection = require('./config/Database');
const  User  = require('../backend/model/UserModel');
const Customer = require('./model/CustomerModel');

app.listen(5000,()=>{
    console.log("Application Running...!");
    dbConnection;
});