/* eslint-disable no-console */
const largestPerimeter = (A) => {
  A.sort((a, b) => a - b);

  let start = A.length - 3;
  let end = A.length;
  let slice = A.slice(start, end);
  let perimeter;

  while (slice.length === 3) {
    const check1 = slice[0] + slice[1] > slice[2];
    const check2 = slice[1] + slice[2] > slice[0];
    const check3 = slice[0] + slice[2] > slice[1];

    if (check1 && check2 && check3) {
      perimeter = slice[0] + slice[1] + slice[2];
      break;
    }

    start -= 1;
    end -= 1;
    slice = A.slice(start, end);
  }

  return perimeter || 0;
};

console.log(largestPerimeter([1, 2, 1])); // Answer = 0
