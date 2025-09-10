
const express = require('express')
const router = express.Router()
const {getProducts, updateProduct, createProduct, deleteProduct} = require('../controllers/productController')

router.get('/products', getProducts);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

module.exports = router