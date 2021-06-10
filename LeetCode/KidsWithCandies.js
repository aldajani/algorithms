/* eslint-disable no-console */
const kidsWithCandies = (candies, extraCandies) => {
  const maxCandies = Math.max(...candies);

  return candies.map((candy) => {
    if (candy + extraCandies >= maxCandies) {
      return true;
    }
    return false;
  });
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3)); // output = [true, true, true, false, true]
