function encodeFunc(chunk, type, shift) {
  const data = chunk.toString();
  const charUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const charLower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('');
  let result = '';

  for (let i = 0; i < data.length; i++) {
    const char = data[i];

    if (charUpper.includes(char) || charLower.includes(char)) {
      const charArr = charUpper.includes(char) ? charUpper : charLower;
      const charIndex = Number(charArr.indexOf(char));
      const index =
        type === 'encode'
          ? (charIndex + Number(shift)) % charArr.length
          : (charArr.length + (charIndex - Number(shift))) % charArr.length;
      result += charArr[index];
    } else {
      result += char;
    }
  }
  return result;
}

module.exports = encodeFunc;
