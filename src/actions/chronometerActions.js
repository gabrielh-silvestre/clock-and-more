import { disableRun, enableRun, increment } from './index';
import store from '../store';

export function normalRun(isRunning = false, intervalId) {
  if (isRunning) {
    clearInterval(intervalId);
    return disableRun();
  }
  const interval = setInterval(() => store.dispatch(increment('second')), 1000);
  return enableRun(interval);
}
