/** importing express and router module */
var express =  require('express');

/** express.Router middleware allows to group the router handler and access them by using common route prefix */
var router = express.Router();

/** Import the category service module */
var categoryService = require('../services/category_service');

/** using http methods(get,post,put, delete) created API it contains http methods, path and router handler */
router.post('/addCategory', categoryService.addCategory);
router.get('/getAllCategory', categoryService.getAllCategory);
router.get('/getAllCategoryByCategoryId/:id', categoryService.getAllCategoryByCategoryId);
router.put('/updateCategoryByCategoryId', categoryService.updateCategoryByCategoryId);
/** delete one category related products are deleted*/
router.delete('/deleteCategoryByCategoryId', categoryService.deleteCategoryByCategoryId);


/** export the router object */

module.exports = router;

