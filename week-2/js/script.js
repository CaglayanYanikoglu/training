/* "use strict"; */
// Hoisting
/* test = 5;
console.log('test', test);
var test; */

const testFunc = () => {
  /* console.log('test func is called.') */
};

//function declaration vs expression
testFunc();



/* var name = prompt('What is your name');
alert(`Hew ${name}!`); */

/* Note: In the external case, we did not need to use the DOMContentLoaded event because the defer attribute solved the problem for us. We didn't use the defer solution for the internal JavaScript example because defer only works for external scripts. */
window.addEventListener('DOMContentLoaded', (event) => {
  /* console.log('event', event); */
  localStorage.setItem('language', JSON.stringify({ 'tr-TR': 'Türkçe' }));
  /* console.log(localStorage.getItem('language')['tr-TR']); */
  /* console.log(JSON.parse(localStorage.getItem('language'))); */
  /* console.log(document.getElementById('addLanguageToLocalStorage')); */
});

/* for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
console.log('final i:', i); */

/* let variable = 'Hello kodluyor uz!';
console.log(variable.toUpperCase());
console.log(variable.split(' '));

let str1 = 'Hellow \'"kodluyoruz"';
let str2 = 'World!';
 */


/* console.log(document.getElementById('addLanguageToLocalStorage'));
console.log(document.getElementsByTagName('button')[0]);
console.log(document.getElementsByClassName('submit-btn')[0]);
console.log(document.querySelector('#addLanguageToLocalStorage')); */
/* document.getElementById('addLanguageToLocalStorage').remove(); */

function writeConsole() {
  console.log('function is called');
}

document.getElementById('addLanguageToLocalStorage').addEventListener('click', function () {
  console.log('add event listener click');
  document.getElementById('addLanguageToLocalStorage').style.color = 'red';
});

/* var name = prompt('What\'s your name?');
console.log('hellow ', name); */

const result = [1, 2, 3, 4, 5];
/* console.log(result);
for (let i = 0; i<result.length; i++) {
  console.log(result[i]);
} */
result.push();
/* const newArray = [...result, 6]; */
/* console.log(newArray); */
let newArray = [];
/* result.forEach(item => {
  console.log(item);
  newArray.push(item * 2);
}) */
/* console.log({newArray});
console.log({result}); */

var multiple = result.map(item => {
  if (item === 2) {
    return item * 2;
  }
});

const filteredData = result.filter(item => item === 2);
/* console.log(filteredData);
console.log(result); */


/* let a = 5;
let b = a;
b = 7;
console.log(a);
console.log(b);
console.log('--------');
let c = [1, 2, 3];
let d = [...c];
d[0] = 150;
console.log(c);
console.log(d); */


/* 
console.log(multiple)
console.log(result)
 */


let age = 19;
let canEnter = false;
let hasParent = true;
let isHeDecentGuy = false;
/* if (age > 17 && isHeDecentGuy) { */
if (age > 17 || hasParent) {
  /* console.log('it is a true fact. You can enter a club.'); */
  canEnter = true;
} else if (age > 16) {
  console.log('I am sorry, u can not enter.')
  canEnter = false;
}

/* let canEnterEasyWay = (age > 17) ? 'u can enter' : 'u can not'; */
let canEnterEasyWay = (age > 17);
let newWay = (age > 16) && 'yea, u can enter'; // if age greater than 16 value will be in right side.
let newWay2 = (age > 16) || 'yea, u can enter';
/* console.log({canEnter});
console.log({canEnterEasyWay});
console.log({newWay}); */

/* for (let i = 0; i < 10; i++) {
  if (i === 3) {
    // break;
    // continue;
  }
  console.log(i);
} */

let count = 110;
while (count < 10) {
  /* console.log({ count }); */
  count = count + 1;
  /* count = count + 10; */
  /* count += 10; */
  count
}

/* var text = "";
var i = 10;
do {
  i++;
  console.log(i);
}
while (i < 5); */

function callFunc(name = 'Stranger') {
  /* if (!name) {
    name = 'Stranger'
  } */
  /* console.log('sumNumber function is called by: ', name); */
}

callFunc('caglayan');
callFunc('Patika');
callFunc();
/* 
function sumNumbers(number1, number2) {
  console.log({number1, number2});
  // return 'Result';
  return number1 + number2;
}

const total = sumNumbers(12, 16);
console.log('total', total); */


const arrowTest = text => console.log(text);
// bind-this plus

arrowTest('Hellow');

// foreach, map, filter, reduce, etc..
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

/* const oddNumber = [];

numbers.forEach(number => {
  if (number % 2 === 1) {
    oddNumber.push(number);
  }
}) */

const oddNumber = numbers.filter(number => number % 2 === 1);

// console.log(oddNumber);
const multipleNumbers = numbers.map(number => number * 2);

// console.log(multipleNumbers);

const obj = {
  username: 'caglayan',
  city: 'Ankara',
  favNumber: 7
}
const reachableAttr = 'username';
console.log(obj);
// console.log(obj['username']);
/* console.log(obj[reachableAttr]); */
/* console.log(obj.reachableAttr); */
/* console.log(obj.username); */

// TODO: u can not use array methods in object.
/* obj.forEach(item => {
  console.log(item);
}) */
// Object.keys(object), Object.values(object) 
/* console.log(Object.keys(obj)); */
Object.keys(obj).forEach(item => {
  /* console.log(`${item} = ${obj[item]}`); */
  /*   console.log(`${item} = ${obj['username']}`);
    console.log(`${item} = ${obj['city']}`);
    console.log(`${item} = ${obj['favNumber']}`); */
});
obj.nickname = 'Caglayan06';
obj.canEnterToBar = true;
obj.work = {
  name: 'JotForm',
  duration: '7 months'
};
obj.sayHello = function () {
  console.log('say Hello');
}
//console.log(obj.work.name);
// TODO: dont change it
obj.sayHello();
/* const nickname = obj.nickname;
const work = obj.work;
const canEnterToBar = obj.canEnterToBar;
const username = obj.username; */
const { nickname, username, ...remains } = obj;

console.log({ nickname });
console.log({ remains });

const destructingArray =  [1, 2, 3, 4, 5, 6];
const newNumber = [7, 8, 9, 10];
const [firstNumber, ...remainArray] = destructingArray;
console.log({firstNumber})
console.log({remainArray})
/* destructingArray.concat(newNumber); */
console.log([...destructingArray, ...newNumber])

const copyObject = {...obj};
/* let obj */
try {
  console.log(obj.username.name.firstLetter);
  /* obj = testObj; */
} catch (error) {
  console.log('This is a error: ', error);
  /* throw "Username does not have name attr!"; */
}
finally {
  /* console.log('execute finally', obj); */
  
}

/* const immutableValue = 5;
immutableValue = 17; */
console.log('Here I am');


