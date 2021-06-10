/* eslint-disable no-console */
const subtractProductAndSum = (n) => {
  const numArr = n.toString().split('');
  let sum = 0;
  let product = 1;

  for (let i = 0; i < numArr.length; i += 1) {
    sum += Number(numArr[i]);
    product *= Number(numArr[i]);
  }

  return product - sum;
};

console.log(subtractProductAndSum(234)); // Answer = 15
