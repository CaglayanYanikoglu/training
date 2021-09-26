import logo from './logo.svg';
import './App.css';
import './main.scss';
import HooksDefault from './components/Hooks';
import Lifecycles from './components/Lifecycles';

function App() {
  return (
    <div className="App">
      <div className="container">
        <p>Hellow</p>
        <HooksDefault />
        <Lifecycles />
      </div>
    </div>
  );
}

export default App;
