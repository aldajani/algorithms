/* eslint-disable no-console */
const titleToNumber = (s) => {
  let columnNum = 0;

  for (let i = 0; i < s.length; i += 1) {
    columnNum = columnNum * 26 + (s[i].charCodeAt() - 64);
  }

  return columnNum;
};

console.log(titleToNumber('AAA')); // Answer = 703;
