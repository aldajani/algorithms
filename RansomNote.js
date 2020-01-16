/* eslint-disable no-console */
const canConstruct = (ransomNote, magazine) => {
  const magazineHash = {};

  for (let i = 0; i < magazine.length; i += 1) {
    if (!magazineHash[magazine[i]]) {
      magazineHash[magazine[i]] = 1;
    } else {
      magazineHash[magazine[i]] += 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i += 1) {
    if (magazineHash[ransomNote[i]] > 0) {
      magazineHash[ransomNote[i]] -= 1;
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct('aa', 'ab')); // Answer = false
