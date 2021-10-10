import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { Button, CustomButton } from './components/Home/ScHome';

function App() {
  return (
    <div className="App">
      <h1>Styled component example</h1>
      <CustomButton>Click me</CustomButton>
      <div className="wrapper">
        <p>Hello styled component!</p>
        <Home />
      </div>
    </div>
  );
}

export default App;
