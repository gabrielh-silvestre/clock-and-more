import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  disableChronometer,
  enableChronometer,
  increment,
  reset,
} from '../actions';
import Chronometer from '../components/Chronometer';
import Button from '../components/Button';
import Play from '../icons/Play';
import Pause from '../icons/Pause';
import Stop from '../icons/Stop';

function Home(props) {
  const { reset, increment, enableChronometer, disableChronometer, isActive } =
    props;

  const [intervalId, setIntervalId] = useState(null);

  function startRunning() {
    if (isActive) {
      clearInterval(intervalId);
      disableChronometer();
    } else {
      const interval = setInterval(() => increment('second'), 1000);
      setIntervalId(interval);
      enableChronometer();
    }
  }

  function resetRunning() {
    clearInterval(intervalId);
    disableChronometer();
    reset('second');
    reset('minute');
    reset('hour');
  }

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Chronometer />
      <Button
        handleClick={startRunning}
        className="flex bg-blue-900 px-6 py-1 rounded-xl text-xl text-gray-300 mt-4"
      >
        <Pause />
        <Play />
      </Button>
      <Button
        handleClick={resetRunning}
        className="flex bg-blue-900 px-6 py-1 rounded-xl text-xl text-gray-300 mt-4"
      >
        <Stop />
      </Button>
    </main>
  );
}

const mapStateToProps = (state) => ({
  isActive: state.chronometer,
});

const mapDispatchToProps = (dispatch) => ({
  reset: (timeType) => dispatch(reset(timeType)),
  increment: (timeType) => dispatch(increment(timeType)),
  enableChronometer: () => dispatch(enableChronometer()),
  disableChronometer: () => dispatch(disableChronometer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
