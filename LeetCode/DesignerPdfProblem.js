/* eslint-disable no-console */
function designerPdfViewer(h, word) {
  let maxHeight = 1;
  for (let i = 0; i < word.length; i += 1) {
    if (h[word[i].charCodeAt() - 97] > maxHeight) {
      maxHeight = h[word[i].charCodeAt() - 97];
    }
  }
  return maxHeight * word.length;
}

const asciiValues = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7];
console.log(designerPdfViewer(asciiValues, 'abc')); // Answer = 9
