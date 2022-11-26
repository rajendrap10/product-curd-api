const express = require("express");
const { addProduct, getProducts,getProduct,editProduct, deleteProduct } = require("../controllers/productController")
const router = express.Router();

router.post('/addProduct', addProduct);
router.get('/getProducts', getProducts);
router.get('/getProduct/:id', getProduct);
router.put('/editProduct/:id', editProduct);
router.get('/deleteProduct/:id', deleteProduct);

module.exports = router;