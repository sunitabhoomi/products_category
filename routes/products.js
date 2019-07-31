/** importing express and router module */
var express =  require('express');
/** express.Router middleware allows to group the router handler and access them by using common route prefix */
var router = express.Router();

/** Import the category service module */
var productsService = require('../services/products_service');

/** using http methods(get,post,put, delete) created API it contains http methods, path and router handler */
router.post('/addProducts', productsService.addProducts);
router.get('/getAllProducts', productsService.getAllProducts);
router.get('/getProductsByProductId/:id', productsService.getProductsByProductId);
router.put('/updateProductsByProductId', productsService.updateProductsByProductId);


/** export the router object */

module.exports = router;

