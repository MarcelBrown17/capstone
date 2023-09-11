const { sign, verify } = require("jsonwebtoken");
require("dotenv").config();

function createToken(user) {
  return sign(
    {
      emailAdd: user.emailAdd,
      userPass: user.userPass,
    },
    process.env.secret_key,
    {
      expiresIn: "1h",
    }
  );
}

function verifyAToken(req, res, next) {
  try {
    const token =
      req.cookies && req.cookies["AuthorisedUser"]
        ? req.cookies["AuthorisedUser"]
        : null;

    if (!token) {
      return res.json({
        status: res.statusCode,
        message: "Please register",
      });
    }

    const isValid = verify(token, process.env.SECRET_KEY);

    if (isValid) {
      req.authenticated = true;
      return next();
    } else {
      return res.json({
        status: res.statusCode,
        message: "Token is not valid",
      });
    }
  } catch (err) {
    return res.json({
      status: res.statusCode,
      message: err.message,
    });
  }
}

module.exports = { createToken, verifyAToken };
