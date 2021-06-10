/* eslint-disable no-console */
const restoreString = (s, indices) => {
  const newStringArr = new Array(s.length);
  for (let i = 0; i < indices.length; i += 1) {
    newStringArr[indices[i]] = s[i];
  }
  return newStringArr.join('');
};

console.log(restoreString('codeleet', [4, 5, 6, 7, 0, 2, 1, 3])); // output = "leetcode"
