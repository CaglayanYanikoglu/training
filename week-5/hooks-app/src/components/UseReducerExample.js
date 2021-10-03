import React, { useReducer, useState } from 'react';
const initialState = {count: 0};

function init(initialCount) {
  return {
    count: initialCount + 10 // initial state
  }
}

function reducer(state, action) {
  console.log({action});
  console.log({state});
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}; // new state
    case 'decrement':
      return {count: state.count - 1};
    /* case 'DELETE_POST':
      return {posts: state.posts.filter(item => item.id !== deletedItemId)}; */
    default:
      /* return {
        ...state
      } */
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  /* const [state, dispatch] = useReducer(reducer, initialState); */
  /* const [counter, setCounter] = useState(0); */
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      {/* <button onClick={setCounter(prevCounter => prevCounter + 1)}></button> */}
    </>
  );
}

export default Counter;