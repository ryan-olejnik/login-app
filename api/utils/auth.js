const jwt = require('jsonwebtoken');

const TOKEN_EXPIRY = '1d';

function generateToken(payload) {
  const options = {
    expiresIn: TOKEN_EXPIRY,
    issuer: process.env.API_URL
  };
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, options);
}

function verifyToken(token) {

}

module.exports = {
  generateToken,
  verifyToken
}