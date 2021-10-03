import React, { useEffect, useRef } from 'react';

const TextInputWithFocusButton = () => {
  const inputEl = useRef(null);
  const surNameInputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    console.log('inputEl.current', inputEl.current);
    console.log('inputEl.current value', inputEl.current.value);
  };
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  const submitForm = () => {
    console.log('submitted form', inputEl.current.value, surNameInputEl.current.value);
  }
  return (
    <>
      <label>Name:</label>
      <input ref={inputEl} type="text" />
      <br />
      <label>Surname</label>
      <input ref={surNameInputEl} type="text" />

      {/* <button onClick={onButtonClick}>Focus the input</button> */}
      <div>
        <button onClick={submitForm}>Submit</button>

      </div>

    </>
  );
}

const Example = () => {
  return (
    <>
      <h2>Use Refs</h2>
      <TextInputWithFocusButton />
    </>
  );
};

export default Example;
