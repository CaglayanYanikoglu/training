
// not pure func
/* const sumNumbers = (x, y, names) => {
  names.push('veli');
  return x + y;
}
 */
// not pure
/* const addName = (names) => {
  names.push('ali');
  return names
} */

// pure func
const addName = (names, name = 'ali') => {
  return [...names, name];
}

const number1 = 10;
// not pure func
/* const sumNumbers = (x, y) => {
  return x + y + number1;
}
 */
// pure func yey ^^
const sumNumbers = (x, y) => {
  return x + y;
}

const names = ['caglayan', 'ercument', 'furkan', 'aykut', 'aytac'];

const result = sumNumbers(5, 6, names);
const newNames = addName(names, 'ali');
console.log(result);
console.log(names);