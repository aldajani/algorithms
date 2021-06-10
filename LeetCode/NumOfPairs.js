/* eslint-disable no-console */
const numIdenticalPairs = (nums) => {
  let numOfPairs = 0;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] === nums[j]) numOfPairs += 1;
    }
  }

  return numOfPairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // ouput = 4
