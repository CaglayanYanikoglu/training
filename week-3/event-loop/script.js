// TODO: open it: https://medium.com/kodcular/event-loop-nedir-744f4db77fe1
/* const bar = () => console.log('bar')

const baz = () => console.log('baz')

const foo = () => {
  console.log('foo')
  bar()
  baz()
}

foo(); */
function init() {
  console.log('First console');
  setTimeout(() => {
    console.log('Set time out console');
  }, 0)
  console.log('Last console');
}
init();
console.log('after init');


/*  function callMe () {
   let i = 10;
   i  = 10 - 10;
 }
 for (let i = 10; i < 100; i--) {
   console.log('test');
 }
 */