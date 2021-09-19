/* function Person() {
  this.showInfos = function () {
    console.log("this object belongs to " + this.constructor.name);
    console.log(this.constructor);
  }
}
const person = new Person();

person.showInfos(); */


/* const obj1 = {
  number1: 10,
  number2: 20,
}
const obj2 = {
  number1: 30,
  number2: 50,
}
function addNumbers(parameterNumber, parameterNumber2){
  console.log('lexical scope this:', this);
  // console.log({parameterNumber})
  // console.log('this number1', this.number1);
  // What is NaN?
  // console.log(this.number1 + this.number2 + parameterNumber + parameterNumber2 );
}
console.log('global this', this);
// addNumbers(100);
// addNumbers.call(obj1, 100, 150);
// addNumbers.apply(obj1,[100, 150]);
// addNumbers.apply(obj2,[100]);
console.log('----------');
// console.log(this);
console.log('before test ', this);
this.test = 'caglayan';
console.log(this.test); */


/* const obj1 = {
  number1:10,
  number2:20
};

// we declaare number1 and number2 to global window object.
// this.number1 = 16;
// this.number2 = 30;

function getNumbersTotal(number3,number4) {
  console.log(this);
  obj1.number1;
  return this.number1 + this.number2 + number3 + number4;
}
// console.log(getNumbersTotal(12, 15));


const copyFunc = getNumbersTotal.bind(obj1); */

// console.log(copyFunc(30,40));


// Function.prototype.bind()
/* const module = {
  x: 42,
  getX: function() {
    console.log(this);
    return this.x;
  },
  name: 'Caglayan'
};

// console.log(module.getX());
const unboundGetX = module.getX;
// console.log(unboundGetX()); // The function gets invoked at the global scope

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// bind(thisArg, arg1, ... , argN) */


/* this.x = 9;    // 'this' refers to global 'window' object here in a browser
const module = {
  x: 81,
  getX: function() { return this.x; }
};

// console.log(module.getX());

const retrieveX = module.getX;
console.log(retrieveX());
//  returns 9; the function gets invoked at the global scope

//  Create a new function with 'this' bound to module
//  New programmers might confuse the
//  global variable 'x' with module's property 'x'
const boundGetX = retrieveX.bind(module);
boundGetX();
//  returns 81 */




function LateBloomer() {
  this.petalCount = Math.floor(Math.random() * 10) + 1; // Returns a random integer from 1 to 10
}

/* // Declare bloom after a delay of 1 second
LateBloomer.prototype.bloom = function () {
  console.log('bloom function is called');
  window.setTimeout(() => {
  //window.setTimeout(function () {
    console.log(this);
    // this.declare.bind(this);
  }, 1000);
};

LateBloomer.prototype.declare = function () {
  console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
};

const flower = new LateBloomer();
flower.bloom(); */
//  after 1 second, calls 'flower.declare()'

/* We can use the Bind function to be able to use our function in another context later (eg Javascript Events — JS Events). We can use the Call and Apply Functions to immediately call a function with an object. */

/* TODO: check this: https://derickbailey.com/2015/09/28/do-es6-arrow-functions-really-solve-this-in-javascript/ */


// arrow function this ^^
// Regular Function:
/* hello = function() {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello); */


// Arrow Function:
hello = () => {
  document.getElementById("demo").innerHTML += this;
}

// The window object calls the function:
window.addEventListener("load", hello);

// A button object calls the function:
document.getElementById("btn").addEventListener("click", hello);

const regularFunc = {
  callFunc: function () {
    return setTimeout(function () {
      console.log(this);
    })
  }
};

console.log(regularFunc.callFunc);


setTimeout(() => {
  this
})