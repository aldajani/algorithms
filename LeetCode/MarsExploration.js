/* eslint-disable no-console */
const marsExploration = (s) => {
  let charCount = 0;

  for (let i = 0; i < s.length; i += 3) {
    if (s[i] !== 'S') {
      charCount += 1;
    }
    if (s[i + 1] !== 'O') {
      charCount += 1;
    }
    if (s[i + 2] !== 'S') {
      charCount += 1;
    }
  }

  return charCount;
};

console.log(marsExploration('SOOSSO')); // Answer = 3
