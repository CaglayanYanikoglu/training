import React from 'react';

function Card({
  age, name
}) {
  console.log(name);
  console.log(age);
  return (
    <div>
      <p>Card Componentt</p>
      <p>Age: {age}</p>
      <p>Name: {name}</p>
    </div>
  )
}

export default Card;
