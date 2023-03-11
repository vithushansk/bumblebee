const express = require('express');
const { getCustomers, addCustomer } = require('../controllers/customerController');
const router = express.Router();

router.route('/customer').get(getCustomers);
router.route('/new/customer').post(addCustomer);

module.exports = router;