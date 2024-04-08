const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign({ id }, "sumanth", {
    expiresIn: "30d",
  });
};
module.exports = generateToken;
