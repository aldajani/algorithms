var numJewelsInStones = function(J, S) {
  let jewelsHash = {};
  let counter = 0;

  for (const char of J) {
    if (!jewelsHash.hasOwnProperty(char)) {
      jewelsHash[char] = true;
    }
  }

  for (const character of S) {
    if (jewelsHash.hasOwnProperty(character)) {
      counter++;
    }
  }

  return counter;
};

console.log(numJewelsInStones('aA', 'aAAbbbb')); // answer = 3