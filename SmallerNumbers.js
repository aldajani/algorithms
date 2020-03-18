/* eslint-disable no-console */
const smallerNumbersThanCurrent = (nums) => {
  const smallerNums = [];

  nums.forEach((num) => {
    let counter = 0;
    nums.forEach((number) => {
      if (number < num) {
        counter += 1;
      }
    });
    smallerNums.push(counter);
  });

  return smallerNums;
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // Answer = [4, 0, 1, 1, 3]
