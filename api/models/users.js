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
  
    try {
      const saltRounds = 15;
      const hashedPassword = await bcrypt.hash(data.UserPass, saltRounds);
  
      const user = {
        firstName: data.firstName,
        lastName: data.lastName,
        userRole: data.userRole,
        emailAdd: data.emailAdd,
        userPass: hashedPassword
      };
  
      const query = 'INSERT INTO Users SET ?';
      db.query(query, user, (err) => {
        if (err) {
          console.error('Error inserting user:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          const token = jwt.sign(
            { userID: user.userID, emailAdd: user.emailAdd },
            process.env.secret_key, 
            {
              expiresIn: '1h',
            }
          );
  
          res.cookie('AuthorizedUser', token, {
            maxAge: 3600000,
            httpOnly: true,
          });
  
          res.status(201).json({
            status: res.statusCode,
            message: 'New user registered!',
          });
        }
      });
    } catch (error) {
      console.error('Error hashing password:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
   async login(req,res){
    const {emailAdd, userPass} =
    req.body
    const query =
    `
    SELECT firstName , lastName, userRole , emailAdd , userPass FROM Users
    WHERE email = '${email}';
    `
    db.query(query,async(err, results)=>{
        if(err) throw err
        if(!results?.length){
            res.json({
                status:res.statusCode,
                msg : "You provided a wrong email."
            })
        }else{
            await compare(userPass, results[0].userPass,(cErr,cResults)=>{
                if(cErr) throw cErr
                // Create a token
                const token = createToken({
                    emailAdd, userPass
                })
                if(cResults){
                    res.json({
                        msg: "Welcome to Watchtime",
                        token,
                        results: results[0]
                    })
                }else{
                    res.json({
                        status: res.statusCode,
                        msg: "Invalid password or you have not registered"
                    })
                }
            })
        }
    })
}
  
  
async updateUser(req, res) {
  const query = `UPDATE Users SET ? WHERE UserID = ?`;
  const userID = req.params.id;
  const userData = req.body;

  try {
    if (userData.userPass) {
      userData.userPass = await bcrypt.hash(userData.userPass, 15);
    }

    for (const key in userData) {
      if (userData[key] === undefined) {
        delete userData[key];
      }
    }

    db.query(query, [userData, userID], (err) => {
      if (err) {
        console.error('Error updating user details:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json({
          status: res.statusCode,
          message: 'User details updated!',
        });
      }
    });
  } catch (error) {
    console.error('Error updating user details:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
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
