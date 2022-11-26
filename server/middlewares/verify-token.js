const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    let token =
      
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];
  // console.log("token" + token);
  let checkBearer = "Bearer ";
  if (token) {
    if (token.startsWith(checkBearer)) {
      token = token.slice(checkBearer.length, token.length);
    }
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        res.json({
          success: false,
          message: "Failed to authenticate",
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.json({
      success: false,
      token: token,
      message: " No token Provider",
    });
  }
};
