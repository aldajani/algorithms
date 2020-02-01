/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const veryHungryRabbit = (matrix) => {
  const n = matrix[0].length;
  const m = matrix.length;
  let carrotsEaten = 0;
  let startingRow;
  let startingColumn;

  // Find starting/mid point
  if (n % 2 === 1 && m % 2 === 1) {
    startingColumn = Math.floor(n / 2);
    startingRow = Math.floor(m / 2);
  } else {
    let maxCarrots = 0;
    const middlePoints = [
      [Math.floor(m / 2), Math.floor(n / 2)],
      [Math.floor((m - 1) / 2), Math.floor(n / 2)],
      [Math.floor(m / 2), Math.floor((n - 1) / 2)],
      [Math.floor((m - 1) / 2), Math.floor((n - 1) / 2)],
    ];

    middlePoints.forEach((point) => {
      const [x, y] = point;
      if (matrix[x][y] > maxCarrots) {
        maxCarrots = matrix[x][y];
        startingRow = x;
        startingColumn = y;
      }
    });
  }

  // Helper to find next position
  const findNextPosition = (position) => {
    const [x, y] = position;
    const neighboringSpots = [
      [x, y + 1],
      [x, y - 1],
      [x + 1, y],
      [x - 1, y],
    ].filter((spot) => { // Filter out all spot that would return undefined
      const [row, column] = spot;
      return row >= 0 && row < m && column >= 0 && column < n;
    });

    let mostCarrots = 0;
    let nextPosition = null;

    neighboringSpots.forEach((spot) => {
      const [row, column] = spot;
      if (matrix[row][column] > mostCarrots) {
        mostCarrots = matrix[row][column];
        nextPosition = [row, column];
      }
    });

    return nextPosition;
  };

  // Current position initialized at starting/mid point
  let currentPosition = [startingRow, startingColumn];

  while (currentPosition) {
    const [x, y] = currentPosition;
    carrotsEaten += matrix[x][y];
    matrix[x][y] = 0;
    currentPosition = findNextPosition(currentPosition);
  }

  return carrotsEaten;
};

console.log(veryHungryRabbit([
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8],
])); // Answer = 27
