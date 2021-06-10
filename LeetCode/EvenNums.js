/* eslint-disable no-console */
const findNumbers = (nums) => {
  let evenNums = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i].toString().length % 2 === 0) {
      evenNums += 1;
    }
  }

  return evenNums;
};

console.log(findNumbers([12, 345, 2, 6, 6754])); // Answer = 2
