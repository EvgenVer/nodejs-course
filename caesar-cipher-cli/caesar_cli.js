const parse_arg = require('./parse_arg');
const path = require('path');
const fs = require('fs');
const stream = require('stream');
const Transform = require('./transform');

const args = parse_arg();

const read = args.input
  ? fs.createReadStream(path.resolve(args.input))
  : process.stdin;

const write = args.output
  ? fs.createWriteStream(path.resolve(args.output), { flags: 'a' })
  : process.stdout;

const transform = new Transform(args.act, args.shift);

stream.pipeline(read, transform, write, err => {
  if (err) {
    console.log(err);
  } else {
    console.log('done');
  }
});
