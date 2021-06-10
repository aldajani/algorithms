/* eslint-disable no-console */
const removeDuplicates = (s) => {
  let newString = s;
  for (let i = 0; i < newString.length; i += 1) {
    if (newString[i] === newString[i + 1]) {
      newString = newString.substring(0, i) + newString.substring(i + 2);
      i = -1;
    }
  }
  return newString;
};

console.log(removeDuplicates('abbaca')); // output = 'ca'

// Solution is unoptimized and takes 1500ms to run -- optimal JS implementation utilizes a stack
