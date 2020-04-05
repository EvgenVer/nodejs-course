const uuid = require('uuid');

class Column {
  constructor({ id = uuid(), title = 'some column', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

class Board {
  constructor({ id = uuid(), title = 'some board', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns.map(item => new Column(item));
  }
}

module.exports = { Column, Board };
