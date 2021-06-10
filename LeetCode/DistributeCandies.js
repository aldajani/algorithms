/* eslint-disable no-console */
const distributeCandies = (candies, numPeople) => {
  const candySums = new Array(numPeople).fill(0);
  let candiesCopy = candies;
  let index = 0;
  let counter = 1;

  while (candiesCopy > 0) {
    if (index > numPeople - 1) index = 0;
    if (counter > candiesCopy) {
      candySums[index] += candiesCopy;
    } else {
      candySums[index] += counter;
    }
    index += 1;
    candiesCopy -= counter;
    counter += 1;
  }

  return candySums;
};

console.log(distributeCandies(7, 4)); // Answer = [1, 2, 3, 1]
