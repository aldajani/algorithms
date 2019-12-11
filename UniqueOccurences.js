/* eslint-disable no-console */
const uniqueOccurrences = (arr) => {
  const hash = {};
  const uniqueVals = [];

  for (let i = 0; i < arr.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(hash, arr[i])) {
      hash[arr[i]] += 1;
    } else {
      hash[arr[i]] = 1;
    }
  }

  const keys = Object.keys(hash);
  for (let i = 0; i < keys.length; i += 1) {
    if (uniqueVals.includes(keys[i])) {
      return false;
    }
    uniqueVals.push(hash[keys[i]]);
  }

  return true;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3])); // Answer = true
