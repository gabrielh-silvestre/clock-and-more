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
    <main>
      <Chronometer />
      <Button handleClick={startRunning} btnText="Start" />
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
