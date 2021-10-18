import { data } from './data';
const initialState = {
  characters: data,
  filteredData: data,
  isFetching: false
}

const reducers = (state = initialState, action) => {
  switch (action.type) {
    /* case 'GET_CHARACTERS':
      return { ...state };
    case 'DELETE_CHARACTER':
      // TODO: remove character
      return { ...state }; */
    case 'FILTER_CHARACTERS':
      const filteredData = state.characters.filter(item => {
        let gender = [...action.payload.gender];
        let species = [...action.payload.type];
        if (gender.length === 0) {
          gender = ['male', 'female', 'unknown'];
        }  
        if (species.length === 0) {
          species = ['human', 'alien'];
        }  
        return gender.includes(item.gender.toLowerCase()) && species.includes(item.species.toLowerCase());
      })
      return { ...state, filteredData };
    default:
      return { ...state };
  }

}

export default reducers;