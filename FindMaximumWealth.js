const maximumWealth = (accounts) => {
  const customerWealths = [];
  for (let i = 0; i < accounts.length; i += 1) {
    const sum = accounts[i].reduce((accumulator, initialValue) => accumulator + initialValue);
    customerWealths.push(sum);
  }
  return Math.max(...customerWealths);
};

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
