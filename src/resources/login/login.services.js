const { JWT_SECRET_KEY } = require('../../common/config');
const jwt = require('jsonwebtoken');
const util = require('util');
const sign = util.promisify(jwt.sign);

const getToken = async user => {
  const payload = {
    userId: user.id,
    login: user.login
  };
  return await sign(payload, JWT_SECRET_KEY);
};

module.exports = getToken;
