/* eslint-disable no-console */
const sortSentence = (s) => {
  const stringArr = s.split(' ');
  stringArr.sort((a, b) => a[a.length - 1] - b[b.length - 1]);
  return stringArr.map((x) => x.substring(0, x.length - 1)).join(' ');
};

console.log(sortSentence('is2 sentence4 This1 a3')); // Output = 'This is a sentence'
