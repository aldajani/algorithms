/* eslint-disable max-len */
/* eslint-disable no-console */
const checkStraightLine = (coordinates) => {
  const slope = Math.abs((coordinates[0][0] - coordinates[1][0]) / (coordinates[0][1] - coordinates[1][1]));

  for (let i = 1; i < coordinates.length; i += 1) {
    const currentPoint = coordinates[i];
    const nextPoint = coordinates[i + 1];

    if (nextPoint) {
      const comparison = Math.abs((nextPoint[0] - currentPoint[0]) / (nextPoint[1] - currentPoint[1]));
      if (comparison !== slope) {
        return false;
      }
    }
  }
  return true;
};

console.log(checkStraightLine([[1, 1], [2, 2], [3, 4], [4, 5], [5, 6], [7, 7]])); // Answer = false
