/* eslint-disable no-console */
const numJewelsInStones = (J, S) => {
  const jewelsHash = {};
  let counter = 0;

  for (let i = 0; i < J.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(jewelsHash, J[i])) {
      jewelsHash[J[i]] = true;
    }
  }

  for (let i = 0; i < S.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(jewelsHash, S[i])) {
      counter += 1;
    }
  }

  return counter;
};

console.log(numJewelsInStones('aA', 'aAAbbbb')); // answer = 3
