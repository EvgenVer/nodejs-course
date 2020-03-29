## Task 1. Caesar cipher CLI tool

When starting from the caesar-cipher-cli directory, use the command:
```
node caesar_cli -a encode -s 5 --input './input.txt' --output './output.txt'
```
CLI tool should accept 4 options (short alias and full name):

1.  **-a, --act <encode/decode>**: an action encode/decode (required)
2.  **-s, --shift <number>**: a shift (required)
3.  **-i, --input <file_path>**: an input file, the path to the file must be quoted (optional)
4.  **-o, --output <file_path>**: an output file, the path to the file must be quoted (optional)
