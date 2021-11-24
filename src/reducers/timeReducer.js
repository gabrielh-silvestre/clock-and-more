const INITIAL_STATE = 0;

export default function timeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return (state += 1);
    case 'DECREMENT':
      return (state -= 1);
    default:
      return state;
  }
}
