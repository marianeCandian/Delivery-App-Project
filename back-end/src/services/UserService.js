const md5 = require('md5');
const Users = require('../database/models');
const { createToken } = require('../utils/authenticator');

const findByEmail = async (email) => {
    const user = await Users.findOne({ where: { email } });
    if (!user) {
        return { type: 401, message: 'Invalid email' };
    }
};

const login = async ({ email, password }) => {
  const user = findByEmail(email);
  const userPassword = md5(password);

  if (userPassword !== user.password) {
    return { type: 401, message: 'Invalid password' };
  }

  const { name, role } = user;
  const token = createToken({ name, email, role });

  return { type: 200, message: { token } };
};

module.exports = {
  login,
};
