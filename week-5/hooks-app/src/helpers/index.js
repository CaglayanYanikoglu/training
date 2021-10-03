export const sumNumbers = (x, y) => {
  console.log('sumNumbers');
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  return x + y;
};
