/* eslint-disable no-console */
const runningSum = (nums) => {
  let currentSum = 0;
  const sumArr = [];

  nums.forEach((num) => {
    currentSum += num;
    sumArr.push(currentSum);
  });

  return sumArr;
};

console.log(runningSum([1, 2, 3, 4])); // output = [1, 3, 6, 10]
