import { disableRun, enableRun, decrement } from './index';
import store from '../store';

export function reverseRun(action, isRunning = false, intervalId) {
  if (isRunning) {
    clearInterval(intervalId);
    return disableRun();
  }
  const interval = setInterval(() => store.dispatch(decrement('second')), 1000);
  return enableRun(interval);
}
