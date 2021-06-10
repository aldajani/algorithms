/* eslint-disable no-console */
const maximum69Number = (num) => {
  const number = num.toString().split('');
  const indexToChange = number.indexOf('6');
  number[indexToChange] = '9';
  return Number(number.join(''));
};

console.log(maximum69Number(9669)); // Answer = 9969
