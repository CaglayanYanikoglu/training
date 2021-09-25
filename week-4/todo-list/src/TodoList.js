import React from 'react';
import './main.scss';

/* const mainStyle = {
  background: 'orange',
  color: 'white'
}; */

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDelete = (id) => {
    this.props.deleteItem(id);
  }
  render() {
    // console.log(this.props)
    return (
      <div style={{marginLeft: '20px'}} className="item-container">
        {this.props.todos.map(item => (
          <p key={item.id}>
            <span>{item.name} </span>
            <span>Id: {item.id}</span>
            <button onClick={() => {this.handleDelete(item.id)}}>Delete</button>
          </p>
        ))}
      </div>
    )
  }
}

export default TodoList;
