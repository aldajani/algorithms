/* eslint-disable no-console */
const countConsistentStrings = (allowed, words) => {
  let sum = 0;
  for (let i = 0; i < words.length; i += 1) {
    let isInString = false;
    for (let j = 0; j < words[i].length; j += 1) {
      if (allowed.includes(words[i][j])) {
        isInString = true;
      } else {
        isInString = false;
        break;
      }
    }
    if (isInString) sum += 1;
  }
  return sum;
};

console.log(countConsistentStrings('ab', ['ad', 'bd', 'aaab', 'baa', 'badab'])); // output =2
