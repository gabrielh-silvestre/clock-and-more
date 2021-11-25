const INITIAL_STATE = {
  isActive: false,
  intervalId: null,
};

export default function chronometerReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DISABLE':
      return { ...state, isActive: false, intervalId: null };
    case 'ENABLE':
      return { ...state, isActive: true, intervalId: action.interval };
    default:
      return state;
  }
}
