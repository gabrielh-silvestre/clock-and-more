export const increment = (timeType, timeValue) => ({ type: 'INCREMENT', payload: { timeType, timeValue } });

export const decreament = (timeType, timeValue) => ({ type: 'DECREMENT', payload: { timeType, timeValue } });
