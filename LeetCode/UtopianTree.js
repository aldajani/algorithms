/* eslint-disable no-console */
function utopianTree(n) {
  let height = 1;
  for (let i = 1; i <= n; i += 1) {
    if (i % 2 === 1) {
      height *= 2;
    }
    if (i % 2 === 0) {
      height += 1;
    }
  }
  return height;
}

console.log(utopianTree(4)); // Answer = 7
