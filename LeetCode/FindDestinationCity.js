/* eslint-disable no-console */
const destCity = (paths) => {
  const firstCityArr = [];
  const secondCityArr = [];
  let destinationCity = '';

  paths.forEach((path) => {
    firstCityArr.push(path[0]);
    secondCityArr.push(path[1]);
  });

  secondCityArr.forEach((city) => {
    if (!firstCityArr.includes(city)) {
      destinationCity = city;
    }
  });

  return destinationCity;
};

console.log(destCity([['London', 'New York'], ['New York', 'Lima'], ['Lima', 'Sao Paulo']])); // output = 'Sao Paulo'
