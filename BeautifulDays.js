/* eslint-disable no-console */
function beautifulDays(i, j, k) {
  let numOfBeautifulDays = 0;

  const getDiff = (number) => {
    const reverseNum = Number(number.toString().split('').reverse().join(''));
    return Math.abs(number - reverseNum);
  };

  for (let g = i; g <= j; g += 1) {
    if (getDiff(g) % k === 0) {
      numOfBeautifulDays += 1;
    }
  }
  return numOfBeautifulDays;
}

console.log(beautifulDays(20, 23, 6)); // Answer = 2
