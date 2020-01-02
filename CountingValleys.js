/* eslint-disable no-console */
function countingValleys(n, s) {

  let valleys = 0;
  let previousAltitude;
  let currentAltitude = 0;

  for (let i = 0; i < s.length; i += 1) {

    previousAltitude = currentAltitude;

    if (s[i] === 'U') currentAltitude += 1;
    if (s[i] === 'D') currentAltitude -= 1;
    if (currentAltitude === 0 && previousAltitude < 0) valleys += 1;
  }

  return valleys;
}

console.log(countingValleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U'])); // Answer = 1
