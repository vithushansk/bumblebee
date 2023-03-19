const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST","PUT","DELETE"]
}));
const user = require('./routes/user');
app.use(user);
const customer = require('./routes/customer');
app.use(customer);

const product = require('./routes/product');
app.use(product);

module.exports = app;