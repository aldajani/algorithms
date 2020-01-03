/* eslint-disable no-console */
function catAndMouse(x, y, z) {
  const catA = Math.abs(x - z);
  const catB = Math.abs(y - z);
  let winner;

  if (catA < catB) winner = 'Cat A';
  if (catB < catA) winner = 'Cat B';
  if (catA === catB) winner = 'Mouse C';

  return winner;
}

console.log(catAndMouse(1, 2, 3)); // Answer = 'Cat B'
