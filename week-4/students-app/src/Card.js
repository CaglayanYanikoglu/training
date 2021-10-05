import React from 'react';

function Card({ age, name }) {
  // console.log(name);
  // console.log(age);
  return (
    <div className="user">
      <div className="user-icon"></div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>

    </div>
  )
}

export default Card;
