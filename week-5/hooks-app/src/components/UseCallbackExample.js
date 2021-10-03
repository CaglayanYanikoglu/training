import React, { useState, useCallback, useEffect } from 'react';
import { debounce } from 'lodash';

// TODO: attention: useCallback(fn, deps) is equivalent to useMemo(() => fn, deps).
// TODO: https://dmitripavlutin.com/dont-overuse-react-usecallback/
// TODO: https://codesandbox.io/s/use-memo-debouncing-jwsog?file=/src/FilterList.js:432-454 check it
// source: https://dmitripavlutin.com/react-throttle-debounce/

function Example() {
  const [state, setState] = useState("");
  const [debouncedState, setDebouncedState] = useState("");
  const [name, setName] = useState('');

  const handleChange = (event) => {
    console.log("search:", event.target.value);
    setState(event.target.value);
    debounceHandle(event.target.value, name);
  };

  const debounceHandle = useCallback(
    debounce((searchVal, searchName) => {
      console.log("updating search");
      setDebouncedState(searchVal);
      console.log('NAME:', searchName);
    }, 1000),
    []
  );

  const handleName = (e) => {
    setName(e.target.value);
  }

  // TODO: why we use return?
  useEffect(() => {
    return () => {
      // componentwillunmounth
      // right before useeffect call
      debounceHandle.cancel();
    }
  }, []);

  return (
    <div className="App">
      <h1>React useCallback & Debounce Demo</h1>
      <form>
        <label>
          Search:
          <input type="text" onChange={handleChange} />
          <input value={name} onChange={handleName} />
        </label>
        <p>Name: {name}</p>
      </form>
      <p>Search Value: {state}</p>
      <p>Debounced Value: {debouncedState}</p>
    </div>
  );
}

export default Example;
