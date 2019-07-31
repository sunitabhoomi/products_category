/** imported controllers */
var db = require('../controllers');

/** below all are services */
module.exports.addCategory = (req, res, next) =>
    db.category.addCategory(req)
        .then((category) => res.send(category))
        .catch((err) => next(err))

module.exports.getAllCategory = (req, res, next) =>
    db.category.getAllCategory()
        .then((category) => res.send(category))
        .catch((err) => next(err))

module.exports.getAllCategoryByCategoryId = (req, res, next) =>
    db.category.getAllCategoryByCategoryId(req)
        .then((category) => res.send(category))
        .catch((err) => next(err))

module.exports.updateCategoryByCategoryId = (req, res, next) =>
    db.category.updateCategoryByCategoryId(req)
        .then((category) => res.send(category))
        .catch((err) => next(err))


module.exports.deleteCategoryByCategoryId = (req, res, next) =>
    db.product.getAllProductsByCategoryId(req)
        .then((products) => db.product.deleteProductsByCategoryId(req))
        .then((products) => db.category.deleteCategoryByCategoryId(req))
        .then((products) => res.send(products))
        .catch((err) => next(err))


