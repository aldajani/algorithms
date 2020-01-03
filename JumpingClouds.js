/* eslint-disable no-console */
function jumpingOnClouds(c, k) {
  let energy = 100;
  let index = 0;
  let position = c[index];

  while (energy > 0) {
    position = c[(index + k) % c.length];
    index = (index + k) % c.length;
    energy -= 1;

    if (position === 1) {
      energy -= 2;
    }

    if (index === 0) {
      break;
    }
  }

  return energy >= 0 ? energy : 0;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2)); // Answer = 96
