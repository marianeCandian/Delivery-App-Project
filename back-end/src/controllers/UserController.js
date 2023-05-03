const { userServeci } = require('../services/UserService');

const login = async (req, res) => {
  const { body } = req;
  const { type, message } = await userServeci.login(body);
  return res.status(type).json(message);
};

module.exports = {
  login,
};