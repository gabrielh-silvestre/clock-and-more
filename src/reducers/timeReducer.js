const INITIAL_STATE = {
  hour: 0,
  minute: 0,
  second: 0,
};

export default function timeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, [action.timeType]: (state[action.timeType] += 1) };
    case 'DECREMENT':
      return { ...state, [action.timeType]: (state[action.timeType] -= 1) };
    case 'RESET':
      return { ...state, [action.timeType]: (state[action.timeType] = 0) };
    case 'START_OVER':
      return { ...state, [action.timeType]: (state[action.timeType] = 59) }
    default:
      return state;
  }
}
