/* eslint-disable no-console */
const breakingRecords = (scores) => {
  let max = scores[0];
  let min = scores[0];
  let increases = 0;
  let decreases = 0;

  scores.forEach((score) => {
    if (score < min) {
      decreases += 1;
      min = score;
    }
    if (score > max) {
      increases += 1;
      max = score;
    }
  });

  return [increases, decreases];
};

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // Answer = [2, 4]
