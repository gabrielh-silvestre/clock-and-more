import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { reverseRun } from '../actions/timerActions';
import { decrement, reset, startOver } from '../actions';

import Clock from './Clock';
import Button from './Button';
import Pause from './icons/Pause';
import Play from './icons/Play';
import Stop from './icons/Stop';

function Timer(props) {
  const {
    startOver,
    decrement,
    reset,
    reverseRun,
    time: { second, minute, hour },
    timeStats: { isActive, intervalId },
  } = props;

  useEffect(() => {
    if (second < 0) {
      if (minute >= 1) {
        decrement('minute');
        startOver('second');
      }
  
      if (minute === 0 && hour >= 1) {
        decrement('hour');
        startOver('minute');
        startOver('second');
      }
  
      if (minute === 0 && hour === 0) {
        resetTimer();
      }
    }
  }, [second]);

  function resetTimer() {
    reverseRun(isActive, intervalId);
    reset('hour');
    reset('minute');
    reset('second');
  }

  return (
    <article className="flex flex-col items-center">
      <Clock />
      <div className="flex justify-between">
        <Button
          handleClick={() => reverseRun(isActive, intervalId)}
          className="flex bg-blue-900 px-6 py-1 rounded-xl text-xl text-gray-300 mt-4 mr-4"
        >
          <Pause />
          <Play />
        </Button>
        <Button
          handleClick={ resetTimer }
          className="flex bg-blue-900 px-6 py-1 rounded-xl text-xl text-gray-300 mt-4"
        >
          <Stop />
        </Button>
      </div>
    </article>
  );
}

const mapStateToProps = (state) => ({
  time: state.time,
  timeStats: state.chronometer,
});

const mapDispatchToProps = (dispatch) => ({
  decrement: (timeType) => dispatch(decrement(timeType)),
  startOver: (timeType) => dispatch(startOver(timeType)),
  reset: (timeType) => dispatch(reset(timeType)),
  reverseRun: (isRunning, intervalId) =>
    dispatch(reverseRun(isRunning, intervalId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
