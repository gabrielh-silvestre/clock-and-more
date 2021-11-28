const INITIAL_STATE = {
  hour: 0,
  minute: 0,
  second: 0,
};

export default function timeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_TIME':
      return {
        ...state,
        [action.payload.timeType]: (state[action.payload.timeType] =
          action.payload.timeValue),
      };
    case 'INCREMENT':
      return {
        ...state,
        [action.payload.timeType]: (state[action.payload.timeType] += 1),
      };
    case 'DECREMENT':
      return {
        ...state,
        [action.payload.timeType]: (state[action.payload.timeType] -= 1),
      };
    case 'RESET':
      return {
        ...state,
        [action.payload.timeType]: (state[action.payload.timeType] = 0),
      };
    case 'START_OVER':
      return {
        ...state,
        [action.payload.timeType]: (state[action.payload.timeType] = 59),
      };
    default:
      return state;
  }
}
