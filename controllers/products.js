var pool = require('../utils/database').getPool();

exports.addProducts = (req) => new Promise(function(resolve, reject ){
    pool.getConnection(function(err, connection){
        let sql = "INSERT INTO products(`categoryId`, `name`,`description`,`uom`,`preservationMethods`,`gst`) VALUES (?,?,?,?,?,?)";
        connection.query(sql, [req.body.categoryId, req.body.name, req.body.description, req.body.uom, req.body.preservationMethods, req.body.gst], function(err, products){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                resolve({ success : true, message : 'products has been added successfully'})
            }
        })
    })
})


exports.getAllProducts = (req) => new Promise(function(resolve, reject ){
    pool.getConnection(function(err, connection){
        let sql = "SELECT * FROM products";
        connection.query(sql,  function(err, products){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                resolve(products)
            }
        })
    })
})



exports.getProductsByProductId = (req) => new Promise(function(resolve, reject ){
    pool.getConnection(function(err, connection){
        let sql = "SELECT * FROM products WHERE id = ?";
        connection.query(sql, [req.params.id],  function(err, products){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                resolve(products)
            }
        })
    })
})



exports.updateProductsByProductId = (req) => new Promise(function(resolve, reject ){
    pool.getConnection(function(err, connection){
        let sql = "UPDATE products SET `categoryId` = ? , `name` = ?,`description` = ?,`uom` = ?,`preservationMethods` = ?,`gst` = ?, `isEnabled` = ? WHERE id = ?";
        connection.query(sql, [req.body.categoryId, req.body.name, req.body.description, req.body.uom, req.body.preservationMethods, req.body.gst, req.body.isEnabled, req.body.id], function(err, products){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                resolve({ success : true, message : 'products has been updated successfully'})
            }
        })
    })
})



exports.getAllProductsByCategoryId = (req) => new Promise(function(resolve, reject ){
    pool.getConnection(function(err, connection){
        let sql = "SELECT * FROM products WHERE categoryId  = ?";
        connection.query(sql, [req.body.categoryId], function(err, products){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                req.products = products;
                resolve(products);
            }
        })
    })
})


exports.deleteProductsByCategoryId = (req) => new Promise(function(resolve, reject ){
    pool.getConnection(function(err, connection){
        let sql = "DELETE FROM products WHERE  categoryId  = ?";
        connection.query(sql, [req.body.categoryId], function(err, products){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                resolve(products)
            }
        })
    })
})

