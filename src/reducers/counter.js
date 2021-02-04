const initialState = {
  count: 0
}

export default function Counter(state = initialState, action) {
  console.log("action", action, 'state', state)
  let newState = state;
  switch(action.type) {
    case 'INCREMENT':
      newState = {count: state.count +1}; 
      return {...state, ...newState}
    case 'DECREMENT':
      newState = {count: state.count -1}; 
      return {...state, ...newState}
    default:
      return state
  }
}