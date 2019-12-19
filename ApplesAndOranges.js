/* eslint-disable no-console */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let numApples = 0;
  let numOranges = 0;

  for (let i = 0; i < apples.length; i += 1) {
    if (a + apples[i] >= s && a + apples[i] <= t) {
      numApples += 1;
    }
  }
  for (let i = 0; i < oranges.length; i += 1) {
    if (b + oranges[i] >= s && b + oranges[i] <= t) {
      numOranges += 1;
    }
  }
  console.log(numApples);
  console.log(numOranges);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]); // Answer = 1 1
