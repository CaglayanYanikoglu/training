import React, { useState, useMemo } from 'react';
import { sumNumbers } from '../helpers/index';

function Example() {
  const [number1, setNumber1] = useState(5);
  const [number2, setNumber2] = useState(15);
  const [counter, setCounter] = useState(0);
  /* const memoizedValue = sumNumbers(number1, number2); */
  const memoizedValue = useMemo(() => sumNumbers(number1, number2), [number1, number2]);
  const oldMemo = useMemo(() => sumNumbers(5, 15), [number1, number2]);

  return (
    <>
      <h2>useMemo</h2>
      <p>Total value: <b>{memoizedValue}</b></p>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(prevCounter => prevCounter + 1)}>Increase</button>
      <button onClick={() => setNumber1(25)}>Set number1 to 25</button>
      <button onClick={() => setNumber2(35)}>Set number2 to 35</button>
      <button onClick={() => setNumber1(5)}>Set number1 to 5</button>
      <button onClick={() => setNumber2(15)}>Set number2 to 15</button>
    </>
  )
}

export default Example;
