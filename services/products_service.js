var db = require('../controllers');

module.exports.addProducts = (req, res, next) =>
    db.product.addProducts(req)
        .then((products) => res.send(products))
        .catch((err) => next(err))


module.exports.getAllProducts = (req, res, next) =>
    db.product.getAllProducts()
        .then((products) => res.send(products))
        .catch((err) => next(err))

module.exports.getProductsByProductId = (req, res, next) =>
    db.product.getProductsByProductId(req)
        .then((products) => res.send(products))
        .catch((err) => next(err))


module.exports.updateProductsByProductId = (req, res, next) =>
    db.product.updateProductsByProductId(req)
        .then((products) => res.send(products))
        .catch((err) => next(err))



