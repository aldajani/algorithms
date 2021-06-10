/* eslint-disable no-console */
const maxPower = (s) => {
  let currentPower = 0;
  let max = 0;

  for (let i = 0; i < s.length; i += 1) {
    currentPower += 1;
    if (s[i] !== s[i + 1]) {
      if (currentPower > max) {
        max = currentPower;
      }
      currentPower = 0;
    }
  }

  return max;
};

console.log(maxPower('leetcode')); // output = 2
