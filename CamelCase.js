const camelcase = (s) => {
  const regex = /[A-Z]/g;
  const matches = s.match(regex);
  if (matches) {
    return matches.length + 1;
  }
  return 1;
}

console.log(camelcase('singleword')) // Answer: 1