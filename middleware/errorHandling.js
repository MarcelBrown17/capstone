const errorHandling = (err, req, res, next) => {
  if (err) {
    res.json({
      status: res.statusCode,
      message: "An unexpected error occurred.",
    });

    next();
  }
};

module.exports = errorHandling;
