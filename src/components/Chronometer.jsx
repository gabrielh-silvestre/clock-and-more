import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { normalRun } from '../actions/chronometerActions';
import { increment, reset } from '../actions';

import Clock from './Clock';
import Button from './Button';
import Pause from './icons/Pause';
import Play from './icons/Play';
import Stop from './icons/Stop';
import Header from './Header';

function Chronometer(props) {
  const {
    reset,
    increment,
    normalRun,
    time: { second, minute },
    timeStats: { isActive, intervalId },
  } = props;

  useEffect(() => {
    if (second === 60) {
      reset('second');
      increment('minute');
    }
  }, [increment, reset, second]);

  useEffect(() => {
    if (minute === 60) {
      reset('minute');
      increment('hour');
    }
  }, [increment, reset, minute]);

  function resetChronometer() {
    normalRun(true, intervalId);
    reset('hour');
    reset('minute');
    reset('second');
  }

  return (
    <article className="flex flex-col items-center">
      <Header tool="Chronometer" />
      <Clock />
      <div className="flex justify-between">
        <Button
          handleClick={() => normalRun(isActive, intervalId)}
          className="flex bg-blue-900 px-6 py-1 rounded-xl text-xl text-gray-300 mt-4 mr-4"
        >
          <Pause />
          <Play />
        </Button>
        <Button
          handleClick={ resetChronometer }
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
  increment: (timeType) => dispatch(increment(timeType)),
  reset: (timeType) => dispatch(reset(timeType)),
  normalRun: (isRunning, intervalId) =>
    dispatch(normalRun(isRunning, intervalId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chronometer);
