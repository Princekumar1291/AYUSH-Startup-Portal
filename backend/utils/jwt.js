const jwt = require('jsonwebtoken');
const { ENV } = require('../config/env');

const generateToken = (userId) => {
  return jwt.sign({ userId }, ENV.JWT_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  return jwt.verify(token, ENV.JWT_SECRET);
};

module.exports = {
    generateToken,
    verifyToken
}
