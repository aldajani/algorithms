/* eslint-disable no-console */
const isMonotonic = (A) => {
  const isIncreasing = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] < arr[i - 1] || arr[i] > arr[i + 1]) return false;
    }
    return true;
  };

  const isDecreasing = (arr) => {
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[i] > arr[i - 1] || arr[i] < arr[i + 1]) return false;
    }
    return true;
  };

  return isIncreasing(A) || isDecreasing(A);
};

console.log(isMonotonic([1, 2, 3, 3, 4, 5])); // Answer = true
