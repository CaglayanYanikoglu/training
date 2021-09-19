function bad(state) {
  // Side effect
  state.prp = 'yes'
  return state
}
function good(state) {
  let newState = { ...state }
  newState.prp = 'yes'
  return newState
}
const obj = {
  name: 'caglayan'
}
/* bad(obj); */
let newObject = good(obj);

console.log(obj);
console.log(newObject);