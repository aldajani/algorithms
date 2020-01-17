/* eslint-disable no-console */
const distributeCandies = (candies, numPeople) => {
  let candiesCopy = candies;
  const candySums = [];
  let index = 0;
  let counter = 1;

  while (candiesCopy > 0) {
    if (index > numPeople - 1) index = 0;
    if (counter > candiesCopy) {
      if (candySums[index]) {
        candySums[index] += candiesCopy;
      } else {
        candySums[index] = candiesCopy;
      }
    } else if (candySums[index]) {
      candySums[index] += counter;
    } else {
      candySums[index] = counter;
    }
    index += 1;
    candiesCopy -= counter;
    counter += 1;
  }

  if (candySums.length !== numPeople) {
    for (let i = candySums.length; i < numPeople; i += 1) candySums.push(0);
  }

  return candySums;
};

console.log(distributeCandies(7, 4)); // Answer = [1, 2, 3, 1]
