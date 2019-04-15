const jwt = require('jsonwebtoken');

const TOKEN_EXPIRY = '1d';
const TOKEN_OPTIONS = {
  expiresIn: TOKEN_EXPIRY,
  issuer: process.env.API_URL
};

function generateToken(payload) {
  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret, TOKEN_OPTIONS);
}

function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET, TOKEN_OPTIONS);
  } catch (err) {
    console.log('Invalid Token');
    return false;
  }
}

module.exports = {
  generateToken,
  verifyToken
}