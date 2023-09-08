const express = require('express');
const bodyParser = require('body-parser'); 
const routes = express.Router(); 
const {users, products, cart} = require('../models')

// User Routes 
routes.get('/users', (req, res) => {
    users.fetchUsers(req, res)
}); 

routes.get('/user/:id', (req, res) => {
    users.fetchUser(req, res)
});

routes.post('/register', 
bodyParser.json(), (req, res) => {
    users.register(req, res)
});

routes.post('/login', 
bodyParser.json(), (req, res) => {
    users.login(req, res)
}); 

routes.put('/user/:id', 
bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
});

routes.patch('/user/:id', 
bodyParser.json(), (req, res) => {
    users.updateUser(req, res)
});

routes.delete('/user/:id', (req, res) => {
    users.deleteUser(req, res)
}); 

// Product Routes
routes.get('/products', (req, res) => {
    products.fetchProducts(req, res)
});

routes.get('/products/:id', (req, res) => {
    products.fetchProduct(req, res)
});

routes.post('/products', 
bodyParser.json(), (req, res) => {
    products.addProduct(req, res)
});

routes.put('/products/:id', 
bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
});

routes.patch('/products/:id', 
bodyParser.json(), (req, res) => {
    products.updateProduct(req, res)
});

routes.delete('/products/:id',
bodyParser.json(), (req, res) => {
    products.deleteProduct(req, res)
});

// Fetch cart for a user
routes.get('/cart/:id', (req, res) => {
  cart.fetchCart(req, res);
});

// Add a product to the cart
routes.post('/cart', (req, res) => {
  cart.addToCart(req, res);
});

// Update a product in the cart
routes.put('/cart/:id', (req, res) => {
  cart.updateCart(req, res);
});

// Delete a product from the cart
routes.delete('/cart/:id', (req, res) => {
  cart.deleteCart(req, res);
});


module.exports = {
    express, 
    routes, 
    cart
}
