import React from 'react';
import { connect } from 'react-redux';

import { normalRun } from '../actions/chronometerActions';

import Chronometer from '../components/Chronometer';
import Button from '../components/Button';
import Play from '../components/icons/Play';
import Pause from '../components/icons/Pause';
import Stop from '../components/icons/Stop';

function Home(props) {
  const {
    normalRun,
    timeStats: { isActive, intervalId },
  } = props;

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <Chronometer />
      <Button
        handleClick={() => normalRun(isActive, intervalId)}
        className="flex bg-blue-900 px-6 py-1 rounded-xl text-xl text-gray-300 mt-4"
      >
        <Pause />
        <Play />
      </Button>
      <Button
        handleClick={() => console.log('trem')}
        className="flex bg-blue-900 px-6 py-1 rounded-xl text-xl text-gray-300 mt-4"
      >
        <Stop />
      </Button>
    </main>
  );
}

const mapStateToProps = (state) => ({
  timeStats: state.chronometer,
});

const mapDispatchToProps = (dispatch) => ({
  normalRun: (isRunning, intervalId) =>
    dispatch(normalRun(isRunning, intervalId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
