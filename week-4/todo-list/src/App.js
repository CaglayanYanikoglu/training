import './App.css';
import React, { Component } from 'react';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      value: ''
    };
  }
  addToList = () => {
    const result = [...this.state.list];
    result.push({
      'name': this.state.value,
      'id': Math.floor(Math.random() * 1000) + 1
    });
    this.setState({
      list: result,
      value: ''
    })
  }
  handleInput = (event) => {
    this.setState({
      value: event.target.value
    });
  }
  deleteItem = (id) => {
    console.log('delete item id: ', id);
    const result = this.state.list.filter(item => item.id !== id);
    /* const index = this.state.list.findIndex(item => item.id === id);
    const result = [...this.state.list];
    result.splice(index, 1); */

    this.setState({
      list: result
    })
  }
  render() {
    return (
      <>
        <h1 style={{ textAlign: 'center', color: '#f2a756' }}>Todo List</h1>
        <input value={this.state.value} onChange={this.handleInput} type="text" style={{ width: '50%', marginLeft: '30px' }} />
        <button style={{ marginLeft: '10px' }} onClick={this.addToList}>Add To List</button>
        <TodoList todos={this.state.list} deleteItem={this.deleteItem} />
      </>
    )
  }
}

export default App;
