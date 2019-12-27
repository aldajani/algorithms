/* eslint-disable no-console */
const heightChecker = (heights) => {
  let changes = 0;
  const sortedHeights = [...heights].sort((a, b) => a - b);

  for (let i = 0; i < heights.length; i += 1) {
    if (heights[i] !== sortedHeights[i]) {
      changes += 1;
    }
  }

  return changes;
};

console.log(heightChecker([1, 1, 4, 2, 1, 3])); // Answer = 3
