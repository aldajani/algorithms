/* eslint-disable no-console */
const checkZeroOnes = (s) => {
  const sArr = s.split('');
  let ones = 0;
  let zeros = 0;
  const oneLengths = [];
  const zeroLengths = [];

  for (let i = 0; i < sArr.length; i += 1) {
    if (sArr[i] === '0') {
      zeros += 1;
      if (ones > 0) {
        oneLengths.push(ones);
        ones = 0;
      }
    }
    if (sArr[i] === '1') {
      ones += 1;
      if (zeros > 0) {
        zeroLengths.push(zeros);
        zeros = 0;
      }
    }
    if (i === sArr.length - 1) {
      zeroLengths.push(zeros);
      oneLengths.push(ones);
    }
  }

  const maxOnes = Math.max(...oneLengths);
  const maxZeros = Math.max(...zeroLengths);

  return maxOnes > maxZeros;
};

console.log(checkZeroOnes('111000')); // Output = false;
