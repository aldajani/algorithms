/* eslint-disable no-console */
const truncateSentence = (s, k) => {
  const sArr = s.split(' ');
  const resultsArr = [];
  for (let i = 0; i < k; i += 1) {
    resultsArr.push(sArr[i]);
  }
  return resultsArr.join(' ');
};

console.log(truncateSentence('Hello how are you Contestant', 4)); // Output = 'Hello how are you'
