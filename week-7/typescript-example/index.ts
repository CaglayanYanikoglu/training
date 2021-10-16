let myName: string = 'Caglayan';
myName = 'Caglayann';
// myName = 16;

let posts: string[] = ['post1', 'post2'];
let newPosts: Array<string> = ['post3', 'post4'];

console.log('hello my name is ', myName);
console.log(posts);
console.log(newPosts);


function sumNumbers(x: number, y: number): number {
  /* function sumNumbers(x: number, y:? number): number { */ // optional parameter for second
  return x + y;
}

sumNumbers(5, 6);

interface User {
  name: string,
  age: number
}

interface Player extends User {
  salary: number
}

const user1: User = { name: 'Caglayan' };
const user2: User = { name: 'Joe', age: 25 };
const player1: Player = { name: 'Kim', age: 19 };