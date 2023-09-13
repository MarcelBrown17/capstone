const db = require('../config')

class Products{
    fetchProducts(req, res){
        const query = `SELECT prodID, prodName, Category, price, quantity, prodUrl, imageUrl2, imageUrl3, imageUrl4 FROM Products;`;

        db.query(query, (err, results) => {
            if(err) throw err;

            res.json({
                status: res.statusCode, 
                results
            });
        });
    }

    fetchProduct(req, res) {
      const productId = req.params.id;
      const query = `SELECT prodID, prodName, price, quantity, prodUrl, Category, imageUrl2, imageUrl3, imageUrl4 FROM Products WHERE prodID = ?;`;
  
      db.query(query, [productId], (err, result) => {
        if (err) {
          console.error('Error executing database query:', err);
          return res.status(500).json({ error: 'An error occurred while fetching the product' });
        }
  
        if (result.length === 0) {
          return res.status(404).json({
            status: res.statusCode,
            message: 'Product not found',
          });
        }
  
        res.json({
          status: res.statusCode,
          result: result[0],
        });
      });
    }
    addProduct(req, res) {
        const query = `
        INSERT INTO Products 
        SET ?;`;
    
        db.query(query, req.body, (err) => {
          if (err) throw err;
    
          res.json({
            status: res.statusCode,
            message: "Added a new Product",
          });
        });
    }

    updateProduct(req, res) {
        const query = `
        UPDATE Products 
        SET ? 
        WHERE prodID = ?;`;
    
        db.query(query, [req.body, req.params.id], (err) => {
          if (err) throw err;
    
          res.json({
            status: res.statusCode,
            message: "Product has been updated",
          });
        });
    }

    deleteProduct(req, res) {
        const query = `
        DELETE FROM Products
        WHERE prodID = "${req.params.id}";`;
    
        db.query(query, (err) => {
          if (err) throw err;
    
          res.json({
            status: res.statusCode,
            message: "Product has been removed",
          });
        });
    }
    
}

module.exports = Products;