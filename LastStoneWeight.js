/* eslint-disable no-console */
const lastStoneWeight = (stones) => {
  if (stones.length === 0) return 0;
  if (stones.length === 1) return stones[0];

  stones.sort((a, b) => a - b);

  const stoneX = stones[stones.length - 2];
  const stoneY = stones[stones.length - 1];

  stones.pop();
  stones.pop();

  if (stoneX !== stoneY) {
    stones.push(stoneY - stoneX);
  }

  return lastStoneWeight(stones);
};

console.log(lastStoneWeight([2, 7, 4, 1, 8, 1])); // Answer = 1
