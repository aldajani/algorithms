/* eslint-disable no-console */
function getMoneySpent(keyboards, drives, b) {
  let totalSpent = 0;

  for (let i = 0; i < keyboards.length; i += 1) {
    for (let j = 0; j < drives.length; j += 1) {
      const currentCost = drives[j] + keyboards[i];
      if (currentCost <= b && currentCost > totalSpent) {
        totalSpent = currentCost;
      }
    }
  }

  return totalSpent === 0 ? -1 : totalSpent;
}

console.log(getMoneySpent([2, 4, 5], [8, 5, 3], 9)); // Answer = 9
