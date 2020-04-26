const { JWT_SECRET_KEY } = require('../../common/config');
const jwt = require('jsonwebtoken');
const util = require('util');
const verify = util.promisify(jwt.verify);

const checkToken = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) throw new Error();
    const [schema, token] = req.headers.authorization.split(' ');
    if (schema !== 'Bearer') throw new Error();
    await verify(token, JWT_SECRET_KEY);
  } catch (error) {
    error.message = 401;
    next(error);
    return;
  }
  next();
};

module.exports = checkToken;
