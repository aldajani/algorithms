const shuffle = (nums, n) => {
  const xArray = nums.slice(0, n);
  const yArray = nums.slice(n);
  const shuffledArray = [];

  while (shuffledArray.length !== 2 * n) {
    shuffledArray.push(xArray.shift(), yArray.shift());
  }

  return shuffledArray;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3));
