const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secret';

const JWT_CONFIG = {
  algorithm: 'HS256',
  expiresIn: '5d',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

const verifyToken = (token) => jwt.verify(token, secret);

module.exports = { createToken, verifyToken };