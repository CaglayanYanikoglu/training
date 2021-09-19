// Lexical scoping
/* function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init(); */

 // 1- call init 9
 // 2 - call displayName 4
 // 3 - console name in displayName 5
 // 4 - displayName functions is ended 6
 // 5 - init function is ended 8













 
// Closure
/* function init() {
  console.log('init function is called');
  var name = 'Mozilla';
  function displayName() {
    console.log('display name function is called');
    console.log(name);
  }
  // displayName()
  return displayName;
}

var myFunc = init();
// myfunc function is actually 'displayName'
myFunc();
myFunc();
myFunc();
myFunc();
myFunc(); */

// 1- call makefunc 19
// 2- makefunc is ended
// 3- displayname func is called 29

// Here's a slightly more interesting example—a makeAdder function:
function makeAdder(x) {
  console.log('x', x);
  return function(y) {
    // console.log('y', y);
    console.log('return function');
    return x + y;
  };
}

var add5 = makeAdder(5);
// var add10 = makeAdder(10);

console.log(add5(2));
console.log(add5(2));
console.log(add5(2));
// console.log(add10(2));
/* add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10. */

/* TODO: check this: https://jsfiddle.net/v7gjv/8164/ */
/* TODO: check reason: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures#:~:text=The%20reason%20for,the%20helpText%20list. */