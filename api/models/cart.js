const db = require("../config");

class Cart {
  fetchCart(req, res) {
    const query = `
      SELECT prodName, price, prodUrl FROM Users 
      INNER JOIN Orders ON Users.userID = Orders.userID
      INNER JOIN Products ON Orders.productID = Products.prodID
      WHERE Orders.userID = ?;`;

    db.query(query, [req.params.id], (err, results) => {
      if (err) {
        res.status(500).json({
          status: 500,
          message: "Error fetching cart",
        });
      } else {
        res.status(200).json({
          status: 200,
          results,
        });
      }
    });
  }

  addToCart(req, res) {
    const query = `
      INSERT INTO Orders
      SET ?;`;

    db.query(query, req.body, (err) => {
      if (err) {
        res.status(500).json({
          status: 500,
          message: "Could not insert a new product",
        });
      } else {
        res.status(201).json({
          status: 201,
          message: "Successfully added new product",
        });
      }
    });
  }

  updateCart(req, res) {
    const query = `
      UPDATE Orders
      SET ?
      WHERE orderID = ?;`;

    db.query(query, [req.body, req.params.id], (err) => {
      if (err) {
        res.status(500).json({
          status: 500,
          message: "Error updating cart",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Cart has been updated",
        });
      }
    });
  }

  deleteCart(req, res) {
    const query = `
      DELETE FROM Orders
      WHERE orderID = ?;`;

    db.query(query, [req.params.id], (err) => {
      if (err) {
        res.status(500).json({
          status: 500,
          message: "Error deleting cart",
        });
      } else {
        res.status(200).json({
          status: 200,
          message: "Cart has been emptied",
        });
      }
    });
  }
}

module.exports = Cart;
