/* eslint-disable no-console */
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return '';

  let prefix = '';
  let i = 1;
  let currentPrefix = strs[0].substring(0, i);

  while (prefix.length < strs[0].length) {
    const position = i;
    const pfix = currentPrefix;

    if (strs.some((el) => el.substring(0, position) !== pfix)) break;

    prefix = currentPrefix;
    i += 1;
    currentPrefix = strs[0].substring(0, i);
  }

  return prefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // Answer = 'fl'
