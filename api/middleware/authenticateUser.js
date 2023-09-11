const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

function createToken(user){
  return sign({
      emailAdd:user.emailAdd,
      userPass:user.userPass
  },
  process.env.secret_key,
  {
      expiresIn:'1h'
  }
  )
}

function verifyAToken(req, res, next) {
  try {
    const token =
      req.cookies["AuthorizedUser"] !== null
        ? req.cookies["AuthorizedUser"]
        : "User not registered.";

    const isValid = null;

    if (!token) {
      isValid = verify(token, process.env.secret_key);

      if (isValid) {
        req.authenticated = true;
        next();
      } else {
        res.json({
          status: res.statusCode,
          message: "Please register!",
        });
      }
    } 
  } catch (err) {
    res.json({
      status: res.statusCode,
      message: err.message,
    });
  }
}

module.exports = {createToken,  verifyAToken };