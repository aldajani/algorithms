/* eslint-disable no-console */
const pickingNumbers = (a) => {
  const obj = {};
  let max = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(obj, a[i])) {
      obj[a[i]] += 1;
    } else {
      obj[a[i]] = 1;
    }
  }

  Object.entries(obj).forEach(([key]) => {
    if (obj[key] > max) {
      max = obj[key];
    }
    if (obj[key + 1] && (obj[key + 1] + obj[key]) > max) {
      max = obj[key + 1] + obj[key];
    }
    if (obj[key - 1] && (obj[key - 1] + obj[key]) > max) {
      max = obj[key - 1] + obj[key];
    }
  });

  return max;
};

console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])); // Answer = 5
