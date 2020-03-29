const stream = require('stream');
const encodeFunc = require('./encodeFunc');

class Transformer extends stream.Transform {
  constructor(type, shift) {
    super();
    this.type = type;
    this.shift = shift;
  }

  _transform(data, encoding, callback) {
    this.push(encodeFunc(data, this.type, this.shift));
    callback();
  }
}

module.exports = Transformer;
