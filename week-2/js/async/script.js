/* function sum(x, y) {
  setTimeout(() => {
    console.log({x, y});
    return x + y;
  }, 2000)
}

const sumResult = sum(6, 12);
printIt(sumResult); */

/* function printIt(result) {
  console.log('printit');
  console.log({result});
}

function sayHellow() {
  console.log('hellow patika');
}

//callbacks
function sumNumbers(x, y, callback) {
  console.log('sumnumbers called');
  setTimeout(() => {
    console.log('settimeout');
    const result = x + y;
    callback(result);
  }, 2000);
}


sumNumbers(5, 6, printIt);
sumNumbers(16, 17, sayHellow); */

/* const callPromise = new Promise(function(resolve, reject){
  if (true) {
    resolve('Successfull');
  } else {
    reject('Failure');
  }
})

callPromise.then(function(answer){
  console.log(answer) // success
}).catch(function(error){
  console.log(error) //  fail
})
 */

/* let hello = async () => "Hello";
console.log(hello()); */
/* hello().then(res => {
  console.log(res + '!!!');
}) */



// callback hell
/* const waitThenCall = (callback) => { setTimeout(() => { callback() }, 1000) }
waitThenCall(() => {
  console.log("Say Hello1");
  waitThenCall(() => {
    console.log("Say Hello2");
    waitThenCall(() => { console.log("Say Hello3"); })
  })
}) */

// Promise
/* const waitThenCall = msg => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(msg + "success") }, 1000)
  });
}
waitThenCall('Hello1_')
  .then((data) => {
    console.log(data)
    return waitThenCall('Hello2_')
  }, (err) => { })
  .then((data) => {
    console.log(data)
    return waitThenCall('Hello3_')
  }, undefined)
  .then((data) => { console.log(data) })
  .catch((err) => { console.log(err + "X") })

console.log('I want to test'); */

  //Async await

const waitThenCall = (msg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve(msg + "success") }, 2000)
  });
}

async function runFunc() {
  try {
    const result = await waitThenCall("Hello1");
    console.log(result)
    const result2 = await waitThenCall("Hello2");
    console.log(result2)
    console.log("Hello")
  } catch (e) {
    console.log(e);
  }
}
runFunc();
