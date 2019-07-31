/** imported database  */
var pool = require('../utils/database').getPool();

/** to add category */

exports.addCategory = (req) => new Promise(function(reslove, reject){
    pool.getConnection(function(err, connection){
        let sql = "INSERT INTO category(`title`,`description`) VALUES(?,?)";
        connection.query(sql, [ req.body.title,req.body.description  ], function(err, category){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                reslove({success : true, message : 'category has been added successfully'});
            }
        })
    })
})

/** to get all the category */

exports.getAllCategory = () => new Promise(function(reslove, reject){
    pool.getConnection(function(err, connection){
        let sql = "SELECT * FROM category";
        connection.query(sql, function(err, category){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                reslove(category)
            }
        })
    })
})

/** to get category by using category id */

exports.getAllCategoryByCategoryId = (req) => new Promise(function(reslove, reject){
    pool.getConnection(function(err, connection){
        let sql = "SELECT * FROM category WHERE id = ?";
        connection.query(sql, [ req.params.id ], function(err, category){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                reslove(category)
            }
        })
    })
})

/** update category  */

exports.updateCategoryByCategoryId = (req) => new Promise(function(reslove, reject){
    pool.getConnection(function(err, connection){
        let sql = "UPDATE category SET title = ?, description = ?  WHERE id = ?";
        connection.query(sql, [ req.body.title,req.body.description, req.body.id ], function(err, category){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                reslove({success : true, message : 'Category has been updated successfully'})
            }
        })
    })
})

/** delete category using category id */
exports.deleteCategoryByCategoryId = (req) => new Promise(function(resolve, reject ){
    pool.getConnection(function(err, connection){
        let sql = "DELETE FROM category WHERE  id  = ?";
        connection.query(sql, [req.body.categoryId], function(err, products){
            connection.release();
            if(err){
                reject(err);
            }
            else {
                resolve({'deleted products are': req.products})
            }
        })
    })
})