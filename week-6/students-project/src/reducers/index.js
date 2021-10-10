import { todos } from '../data';
const initialState = {
  todos: todos,
  counter: 0
}

const reducers = (state = initialState, action) => {
  console.log('state, ', state);
  console.log('action, ', action);
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('added called');
      return { ...state, todos: [...state.todos, action.payload] };
    case 'DELETE_ITEM':
      return { ...state };
    case 'INCREASE_COUNTER':
      return { ...state, counter: state.counter + 1};
    default:
      return { ...state };
  }

}

export default reducers;