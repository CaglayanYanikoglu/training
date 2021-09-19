// primitive types: string, number, boolean etc..
let value1 = 15;
let value2 = value1;
console.log({value1, value2});

value2 = 30;
console.log({value1, value2});

// reference types: obj, array
const result = ['Caglayan', 'Ali', 'Merve', 'Fatma'];
const total = result;
const copyObject = [...result]
total.push('Ercument');
console.log({total, result, copyObject});
