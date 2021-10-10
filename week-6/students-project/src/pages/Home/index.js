import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../../components/TodoItem';

const Home = () => {
  const todos = useSelector(state => state.todos);
  const counter = useSelector(state => state.counter);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescripion] = useState('');
  const dispatch = useDispatch();
  localStorage.setItem('lang', 'en-US');
  /* const generalState = useSelector(state => state);
  const { todos } = generalState; */

  // console.log('generalState', generalState);


  const addToTodoList = () => {
    return {
      type: "ADD_ITEM",
      payload: {
        id: todos.length + 1,
        title: newTitle,
        description: newDescription
      }
    };
  };

  const increaseCounter = () => {
    return {
      type: 'INCREASE_COUNTER'
    }
  }
  const addToList = () => {
    // TODO: action = dispatch
    setNewTitle('');
    setNewDescripion('');
    dispatch(addToTodoList());
  }

  const setLanguage = () => {
    console.log(localStorage.setItem('lang', 'tr-TR'));
  };
  const getLanguage = () => {
    console.log(localStorage.getItem('lang'));
  };
  const setLanguageCookie = () => {
    document.cookie = "lang=tr-TR";
  };
  const getLanguageCookie = () => {
    console.log(document.cookie)
  };
  return (
    <>
      <p>Home</p>
      <p>Counter {counter}</p>
      <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
      <br />
      <input type="text" value={newDescription} onChange={(e) => setNewDescripion(e.target.value)} />
      <br />
      <button onClick={addToList}>Add to List</button>
      {todos.map(item => (
        <Todo todo={item} key={item.id} />
      ))}

      <div>
        <button onClick={getLanguage}>Get language localStorage</button>
        <button onClick={setLanguage}>Set language localStorage</button>
        <button onClick={getLanguageCookie}>Get language cookie</button>
        <button onClick={setLanguageCookie}>Set language cookie</button>
      </div>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => dispatch(increaseCounter())}>Increase counter</button>
      </div>

    </>
  )
};

/* const mapStateToprops = () => {
  
}
const mapDispatchtoProps = () => {

} */

export default Home;

// export default connect(Home, mapStateToprops, mapDispatchtoProps);
