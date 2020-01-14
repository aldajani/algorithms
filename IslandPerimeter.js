/* eslint-disable no-console */
const islandPerimeter = (grid) => {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      const up = grid[i + 1];
      const down = grid[i - 1];
      const right = grid[i][j + 1];
      const left = grid[i][j - 1];

      if (grid[i][j] === 1) {
        if (!up) {
          perimeter += 1;
        } else if (up[j] !== 1) perimeter += 1;

        if (!down) {
          perimeter += 1;
        } else if (down[j] !== 1) perimeter += 1;

        if (!right) perimeter += 1;

        if (!left) perimeter += 1;
      }
    }
  }

  return perimeter;
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]])); // Answer 16
