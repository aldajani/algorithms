/* eslint-disable no-console */
const canConstruct = (ransomNote, magazine) => {
  let magazineCopy = magazine.slice(0);
  let index = 0;
  let searchChar = ransomNote[index];

  while (searchChar) {
    const matchingIndex = magazineCopy.indexOf(searchChar);

    if (matchingIndex !== -1) {
      magazineCopy = magazineCopy.slice(0, matchingIndex) + magazineCopy.slice(matchingIndex + 1);
      index += 1;
      searchChar = ransomNote[index];
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct('aa', 'ab')); // Answer = false
