/* eslint-disable no-console */
const findSpecialInteger = (arr) => {
  const { length } = arr;
  let specialInteger;

  for (let i = 0; i < arr.length; i += 1) {
    const section = arr.slice(i, i + Math.ceil(length / 4) + 1);

    if (section.every((number) => number === arr[i])) {
      specialInteger = arr[i];
      break;
    }
  }

  return specialInteger;
};

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10])); // Answer = 6
