import './App.css';
import React, { useEffect, useState } from 'react';
import UseReducerExample from './components/UseReducerExample';
import UseMemoExample from './components/UseMemoExample';
import UseCallbackExample from './components/UseCallbackExample';
import UseRefExample from './components/UseRefExample';


function App() {

  return (
   <div className="App">
     <h1>Hooks Examples</h1>
     <UseReducerExample initialCount={15} />
    {/* <UseMemoExample /> */}
    {/* <UseCallbackExample /> */}
    {/* <UseRefExample /> */}
   </div>
  );
}


export default App;
