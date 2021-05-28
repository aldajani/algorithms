/* eslint-disable no-console */
const replaceDigits = (s) => {
  const sArr = s.split('');
  for (let i = 1; i < sArr.length; i += 2) {
    const newAscii = sArr[i - 1].charCodeAt(0) + Number(sArr[i]);
    sArr[i] = String.fromCharCode(newAscii);
  }
  return sArr.join('');
};

console.log(replaceDigits('a1c1e1')); // Output = 'abcdef'
