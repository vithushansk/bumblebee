const express = require('express');
const { getUsers, addUser } = require('../controllers/userController');
const router = express.Router();

router.route('/view').get(getUsers);
router.route('/new/user').post(addUser);

module.exports = router;