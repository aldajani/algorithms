/* eslint-disable no-console */
const uniqueMorseRepresentations = (words) => {
  const transformations = new Set();
  const map = {
    a: '.-', b: '-...', c: '-.-.', d: '-..', e: '.', f: '..-.', g: '--.', h: '....', i: '..', j: '.---', k: '-.-', l: '.-..', m: '--', n: '-.', o: '---', p: '.--.', q: '--.-', r: '.-.', s: '...', t: '-', u: '..-', v: '...-', w: '.--', x: '-..-', y: '-.--', z: '--..',
  };

  words.forEach((word) => {
    const wordArr = word.split('');
    transformations.add(wordArr.reduce((accumulator, currentLetter) => accumulator + map[currentLetter], ''));
  });

  return transformations.size;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])); // Answer = 2
