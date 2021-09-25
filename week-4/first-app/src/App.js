import './App.css';
import React from 'react';
import FirstComponent from './FirstComponent';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('app constructor');
    this.state = {
      counter: 0,
      show: false,
      lessonIsHelpful: false
    }
    this.test = 'teesttt';
    this.sayHelloCicekSepeti = this.sayHelloCicekSepeti.bind(this);
  }
  sayHelloPatika() {
    console.log('hellow patika');
  }
  sayHelloKodluyoruz(from) {
    console.log('hellow kodluyoruz from:', from)
  }
  sayHelloCicekSepeti = function () {
    console.log('hellow çiçek sepeti', this);
    console.log('counter: ', this.state.counter);
  }
  sayHelloCicekSepetiWithArrow = () => {
    console.log('hellow çiçek sepeti', this);
    console.log('counter: ', this.state.counter);
  }
  renderItems(nameList) {
    return (
      <div className="name-container">
          {
            nameList.map(element=> (
              <p key={element}>Hello, I am {element}</p>
            ))
          }
      </div>
    )
  }
  increaseCounter = () => {
    console.log('increaseCounter, thi', this);
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return (
      <>
        <div>
          <p className="p-class">Hellow patika!</p>
          {/* <button onClick={this.sayHelloPatika}>Say Hello Patika</button>
          <button onClick={() => { this.sayHelloKodluyoruz('caglayan') }}>Say Hello Kodluyoruz</button>
          <button onClick={this.sayHelloCicekSepeti}>Say hello ÇiçekSepeti</button>
          <button onClick={this.sayHelloCicekSepetiWithArrow}>Say hello ÇiçekSepeti</button> */}
        </div>
        <div>
          {
            (this.state.counter === 0) ? <p>Counter is zero</p> : <p>Counter is not zero</p>
          }
          {
            this.renderItems(['yigitcan', 'ogun', 'ali', 'aysegul', 'oguz', 'caglayan', 'ercument', 'aykut'])
          }
          {
            this.state.show && <p>Show is true</p>
          }
          <p>Counter : {this.state.counter}</p>
          <button onClick={this.increaseCounter}>Increase Counter</button>
          <FirstComponent counterOfButton={this.state.counter}  name="Rumeysa" lessonIsHelpful={this.state.lessonIsHelpful} />
          {/* <button onClick={() => {
            this.setState({
              lessonIsHelpful: true
            })
          }}>Make it useful</button> */}
        </div>
      </>
    )
  }
}


export default App;
