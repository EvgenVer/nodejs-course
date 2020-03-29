/* eslint-disable no-sync */
/* eslint-disable no-process-exit */
const { program } = require('commander');
const fs = require('fs');
const path = require('path');

function parse_arg() {
  program
    .option('-a, --act <value>', 'an action encoding/decoding')
    .option('-s, --shift <value>', 'a shift for encoding/decoding')
    .option('-i, --input <file>', 'an input file')
    .option('-o, --output <file>', 'an output file');

  program.parse(process.argv);
  const arg = program.opts();
  if (!arg.act || !arg.shift) {
    const errArgs = !arg.act ? '-a/--act' : '-s / --shift';
    process.stderr.write(`Error: Argument ${errArgs} wasn't received!`);
    process.exit(13);
  }

  if (!(arg.act === 'encode' || arg.act === 'decode')) {
    process.stderr.write('Error: The value of parameter -a/--act is not valid');
    process.exit(12);
  }

  if (isNaN(Number(arg.shift))) {
    process.stderr.write(
      'Error: The value of parameter -s/--shift is not valid'
    );
    process.exit(14);
  }

  if (arg.input) {
    const filePath = path.resolve(arg.input);
    try {
      fs.statSync(filePath);
    } catch (err) {
      process.stderr.write(`Error: File ${filePath} doesn't exist!`);
      process.exit(10);
    }
    try {
      fs.accessSync(filePath);
    } catch (err) {
      process.stderr.write(`Error: No access to file ${filePath}!`);
      process.exit(10);
    }
  }

  if (arg.output) {
    const filePath = path.resolve(arg.output);
    try {
      fs.statSync(filePath);
    } catch (err) {
      process.stderr.write(`Error: File ${filePath} doesn't exist!`);
      process.exit(10);
    }
    try {
      fs.accessSync(filePath);
    } catch (err) {
      process.stderr.write(`Error: No access to file ${filePath}!`);
      process.exit(10);
    }
  }

  return arg;
}

module.exports = parse_arg;
