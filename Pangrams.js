/* eslint-disable no-console */
const pangrams = (s) => {
  const input = s.toLowerCase();
  const letters = {};
  const regex = /[A-Z]/gi;

  for (let i = 0; i < input.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(letters, input[i]) && input[i].match(regex)) {
      letters[input[i]] = 1;
    }
  }

  if (Object.keys(letters).length === 26) {
    return 'pangram';
  }
  return 'not pangram';
};

console.log(pangrams('We promptly judged antique ivory buckles for the next prize')); // Answer: 'pangram'
