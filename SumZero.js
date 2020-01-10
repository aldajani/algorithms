/* eslint-disable no-console */
const sumZero = (n) => {
  const numbers = [];
  let negNum = 0;
  let posNum = 0;

  if (n % 2 === 1) numbers.push(0);

  while (numbers.length !== n) {
    posNum += 1;
    negNum -= 1;
    numbers.push(posNum, negNum);
  }

  return numbers;
};

console.log(sumZero(5)); // Answer = [0, 1, -1, 2, -2]
