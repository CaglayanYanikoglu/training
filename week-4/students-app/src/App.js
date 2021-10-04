import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './Card';

function App() {
  const [realNumber, setRealNumber] = useState(0);
  const [guessNumber, setGuessNumber] = useState("");
  const [tempNumber, setTempNumber] = useState(0);
  const [result, handleResult] = useState({
    success: false,
    show: false,
    big: false,
    low: false,

  })
  /* const [showPopup, handleShopPopup] = useState(false);
  const [notificationType, setNotificationType] = useState('fail'); */

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setRealNumber(randomNumber);
    console.log(randomNumber);
  }, [])

  const handleGuessInput = (event) => {
    setGuessNumber(event.target.value);
  }

  const handleGuess = () => {
    if (guessNumber > 0 && guessNumber <= 100) {
      if (parseInt(guessNumber) === realNumber) {
        console.log("Congratulations you won! ")
        // setNotificationType('success');
        handleResult({
          show: true,
          success: true
        })
        // return  <div>('Right, u won!!')</div>;
      } else if (guessNumber > realNumber) {
        console.log('It is high, guess lower');
        // setNotificationType('fail');
        handleResult({
          show: true,
          success: false,
          big: true,
        })
      } else {
        console.log('It is low, guess higher');
        // setNotificationType('fail');
        handleResult({
          show: true,
          success: false,
          low: true,

        })
      }
      // handleShopPopup(true);
      setTempNumber(guessNumber)
      setGuessNumber("");
    }
    else {
      alert("the number have to between 1-100");
      setGuessNumber("");
    }
  }

  useEffect(() => {
    // console.log('result changed');
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
      <div className="header">
        <h1 className="guessText">Guess my Number</h1>
      </div>
      <div className="main-container">
        {/* <input type="number" class="input-number" placeholder="&nbsp;" value={guessNumber} onChange={handleGuessInput} /> */}
        <div className="form__group field">
          <input type="number" min="1" max="100" className="form__field" placeholder="Number" name="name" id='name' required value={guessNumber} onChange={handleGuessInput} />
          <label htmlFor="number" className="form__label" style={{ fontSize: '14px' }}>Number</label>
        </div>
        <div className="guessWrapper">
          <button className="buttonGuess" onClick={handleGuess}>Guess</button>
        </div>

        {result.show &&
          (
            <div>

              {result.success ?
                <h2 style={{ color: 'green' }}>Yey, you won!</h2> :
                <div>Your guess was: <b>{tempNumber}</b></div>
                // <h2 style={{ color: 'red' }}>Na, you are the worst!</h2>
              }
              {
                result.big &&
                <h3 style={{ color: 'red' }}>It's big guess lower</h3>
              }
              {
                result.low &&
                <h3 style={{ color: 'red' }}>It's low, guess higher</h3>
              }
            </div>
          )
        }
        <Card age={18} name="Joe" />
      </div>
    </div>
  );
}

export default App;
