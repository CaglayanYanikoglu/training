import React from 'react';
import { TodoWrapper } from './ScTodoItem';

const TodoItem = ({ todo }) => {
  return (
    <TodoWrapper>
      <p>{todo.title}</p>
      <p>{todo.description}</p>
    </TodoWrapper>
  )
}

export default TodoItem;
