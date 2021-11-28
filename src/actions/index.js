export const setTime = (timeType, timeValue) => ({
  type: 'SET_TIME',
  payload: { timeType, timeValue },
});

export const increment = (timeType) => ({
  type: 'INCREMENT',
  payload: { timeType },
});

export const decrement = (timeType) => ({
  type: 'DECREMENT',
  payload: { timeType },
});

export const reset = (timeType) => ({
  type: 'RESET',
  payload: { timeType }
});

export const startOver = (timeType) => ({
  type: 'START_OVER',
  payload: { timeType },
});

export const enableRun = (interval) => ({
  type: 'ENABLE',
  interval
});

export const disableRun = () => ({ type: 'DISABLE' });
