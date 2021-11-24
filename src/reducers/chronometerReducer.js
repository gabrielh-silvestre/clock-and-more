const INITIAL_STATE = false;

export default function chronometerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DISABLE':
      return (state = false);
    case 'ENABLE':
      return (state = true);
    default:
      return state;
  }
}
