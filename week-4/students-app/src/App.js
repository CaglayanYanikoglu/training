import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [realNumber, setRealNumber] = useState(0);
  const [guessNumber, setGuessNumber] = useState(0);
  const [result, handleResult] = useState({
    success: false,
    show: false
  })
  /* const [showPopup, handleShopPopup] = useState(false);
  const [notificationType, setNotificationType] = useState('fail'); */

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setRealNumber(randomNumber);
  }, [])

  const handleGuessInput = (event) => {
    setGuessNumber(event.target.value);
  }
  const handleGuess = () => {
    if (parseInt(guessNumber) === realNumber) {
      console.log('Right, u won!!');
      // setNotificationType('success');
      handleResult({
        show: true,
        success: true
      })
    } else if (guessNumber > realNumber) {
      console.log('It is too high, guess lower');
      // setNotificationType('fail');
      handleResult({
        show: true,
        success: false
      })
    } else {
      console.log('It is too low, guess higher');
      // setNotificationType('fail');
      handleResult({
        show: true,
        success: false
      })
    }
    // handleShopPopup(true);

  }

  useEffect(() => {
    console.log('result changed');
    const timeout = setTimeout(() => {
      handleResult({
        show: false,
        success: false,
        ...result
      })
    }, 3000)

    return () => {
      // clean 
      clearTimeout(timeout);
    }
  }, [result]);
  return (
    <div className="App">
      <h1>Guess my Number</h1>
      <input type="number" value={guessNumber} onChange={handleGuessInput} />
      <button onClick={handleGuess}>Guess</button>
      {result.show &&
        (
          <div>
            {result.success ?
              <h2 style={{ color: 'green' }}>Yey, you won!</h2> :
              <h2 style={{ color: 'red' }}>Na, you are the worst!</h2>
            }
          </div>
        )
      }
      <Card age={18} name="Joe" />
    </div>
  );
}

export default App;
