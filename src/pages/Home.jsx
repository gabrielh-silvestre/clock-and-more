import React, { useState } from 'react';
import { connect } from 'react-redux';

import { disableChronometer, enableChronometer, increment } from '../actions';
import Chronometer from '../components/Chronometer';
import Button from '../components/Button';

function Home(props) {
  const { increment, enableChronometer, disableChronometer, isActive } = props;

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

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Chronometer />
      <Button
        handleClick={startRunning}
        btnText="Start"
        className="bg-blue-900 px-6 py-1 rounded-xl text-xl text-gray-300 mt-4"
      />
    </main>
  );
}

const mapStateToProps = (state) => ({
  isActive: state.chronometer,
});

const mapDispatchToProps = (dispatch) => ({
  increment: (timeType) => dispatch(increment(timeType)),
  enableChronometer: () => dispatch(enableChronometer()),
  disableChronometer: () => dispatch(disableChronometer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
