/* eslint-disable no-console */
function numberOfSteps(num) {
  let currentNumber = num;
  let steps = 0;

  while (currentNumber !== 0) {
    if (currentNumber % 2 === 0) {
      currentNumber /= 2;
      steps += 1;
    } else {
      currentNumber -= 1;
      steps += 1;
    }
  }
  return steps;
}

console.log(numberOfSteps(14)); // Answer = 6
