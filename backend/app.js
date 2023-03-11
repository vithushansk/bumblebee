const express = require('express');
const app = express();
app.use(express.json());

const user = require('./routes/user');
app.use(user);
const customer = require('./routes/customer');
app.use(customer);

module.exports = app;