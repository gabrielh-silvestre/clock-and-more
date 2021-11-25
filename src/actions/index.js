export const increment = (timeType) => ({ type: 'INCREMENT', timeType });

export const decrement = (timeType) => ({ type: 'DECREMENT', timeType });

export const reset = (timeType) => ({ type: 'RESET', timeType });

export const enableRun = (interval) => ({ type: 'ENABLE', interval });

export const disableRun = () => ({ type: 'DISABLE' });
