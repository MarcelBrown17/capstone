const db = require('../config');

class Cart{
    fetchCart(req, res){
        const query = `
        SELECT prodName, price, prodUrl FROM Users 
        INNER JOIN Orders ON Users.userID =   Orders.userID
        INNER JOIN Products ON Orders.productID = Products.prodID
        WHERE Orders.userID = ${req.params.id};`;

        db.query(query, (err, results) => {
            if(err) throw err; 
            res.json({
                status: res.StatusCode, 
                results
            })
        })
    }

    addToCart(req, res){
        const query = `
        INSERT INTO Orders
        SET?;`;

        db.query(query, req.body, (err) => {
            if(err){
                res.json({
                    status: res.StatusCode,
                    message: "Could not insert a new product"
                });
            }
            else{
                res.json({
                    status: res.statusCode,
                    message: "Successfully added new product"
                })
            }
        })
    }

    updateCart(req, res){
        const query = `
        Update Orders
        SET ?
        WHERE orderID = ?;`;

        db.query(query, [req.body, req.params.id], (err) => {
            if(err) throw err

            res.json({
                status: res.StatusCode, 
                message: "Cart has been updated"
            });
        });
    }

    deleteCart(req, res){
        const query = `
        DELETE FROM Orders
        WHERE orderID = ?;`;

        db.query(query, [req.params.id], (err) => {
            if (err) throw err;

            res.json({
                status: res.statusCode, 
                message: "Cart has been emptied"
            });
        });
    }
}    

module.exports = Cart