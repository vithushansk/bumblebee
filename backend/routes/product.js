const express = require('express');
const { getProducts, newProduct, updateProduct,getProductById } = require('../controllers/productController');
const router = express.Router();

router.route('/product/view').get(getProducts);
router.route('/product/:id').get(getProductById);
router.route('/product/add').post(newProduct);
router.route('/product/:id').patch(updateProduct);


module.exports = router;