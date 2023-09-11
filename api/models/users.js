const db = require("../config");
const { hash, compare } = require("bcrypt");
const { createToken } = require("../middleware/authenticateUser");
const express = require("express");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cookieParser());

class Users {
  fetchUsers(req, res) {
    const query = `
        SELECT userID, firstName, lastName, userRole, emailAdd, userPass, userImage
        FROM Users;`;

    db.query(query, (err, results) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        results,
      });
    });
  }

  fetchUser(req, res) {
    const query = `
        SELECT userID, firstName, lastName, userRole, emailAdd, userPass, userImage
        FROM Users 
        WHERE userID = ${req.params.id};`;

    db.query(query, (err, result) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        result,
      });
    });
  }

  async register(req, res) {
    const data = req.body;

    if (!data) {
      return res.status(400).json({
        status: 400,
        message: "Request body is missing",
      });
    }

    try {
      // password encryption
      const saltRounds = 10; // number of salt rounds
      const hashedPassword = await hash(data.userPass, saltRounds);

      // Replace the plain password with the hashed password
      data.userPass = hashedPassword;

      const user = {
        firstName: data.firstName,
        surName: data.lastName,
        emailAdd: data.emailAdd,
        userPass: data.userPass,
      };

      const query = `
            INSERT INTO Users 
            SET ?;`;

      db.query(query, [data], (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            status: 500,
            message: "Internal Server Error",
          });
        } else {
          const token = jwt.sign(
            { userID: data.userID, email: data.emailAdd },
            process.env.SECRET_KEY, // Make sure you have this in your .env file
            {
              expiresIn: "1h",
            }
          );

          res.cookie("AuthorizedUser", token, {
            maxAge: 3600000,
            httpOnly: true,
          });

          res.status(201).json({
            status: res.statusCode,
            message: "New user registered!",
          });
        }
      });
    } catch (error) {
      console.error("Error hashing password:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async login(req, res) {
    const { email, userPass } = req.body;
  
    try {
      const query = `
        SELECT userID, firstName, lastName, emailAdd, userPass
        FROM Users
        WHERE emailAdd = ?;
      `;
  
      db.query(query, [email], async (err, result) => {
        if (err) {
          console.error('Error querying the database:', err);
          return res.status(500).json({ error: 'Internal server error' });
        }
  
        if (!result?.length) {
          return res.status(401).json({
            status: res.statusCode,
            message: 'Incorrect email or password!',
          });
        }
  
        const user = result[0];
        const isPasswordValid = await compare(userPass, user.userPass); // Use compare from bcrypt
  
        if (isPasswordValid) {
          const token = jwt.sign(
            { userID: user.userID, email: user.emailAdd },
            process.env.secret_key, 
            {
              expiresIn: '1h',
            }
          );
  
          res.cookie('AuthorizedUser', token, {
            maxAge: 3600000,
            httpOnly: true,
          });
  
          return res.status(200).json({
            message: 'Welcome back to Envy Essentials!',
            token,
            user,
          });
        } else {
          return res.status(401).json({
            status: res.statusCode,
            message: 'Incorrect email or password!',
          });
        }
      });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  updateUser(req, res) {
    const query = `
        UPDATE Users 
        SET ? 
        WHERE userID = ?`;

    const data = req.body;

    // encrypt password
    data.userPass = hash(data.userPass, 20); // Changed from hashSync

    db.query(query, [data, req.params.id], (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "Updated User Details",
      });
    });
  }

  deleteUser(req, res) {
    const query = `
        DELETE FROM Users 
        WHERE userID = '${req.params.id}';`;

    db.query(query, (err) => {
      if (err) throw err;

      res.json({
        status: res.statusCode,
        message: "Deleted User",
      });
    });
  }
}

module.exports = Users;
