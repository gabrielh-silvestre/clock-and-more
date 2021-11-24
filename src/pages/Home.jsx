import React from 'react';
import { connect } from 'react-redux';

import { increment } from '../actions';
import Chronometer from '../components/Chronometer';
import Button from '../components/Button';

function Home(props) {
  const { increment } = props;

  function startRunning() {
    setInterval(() => increment('second'), 1);
  }

  return (
    <main>
      <Chronometer />
      <Button handleClick={startRunning} btnText="Start" />
    </main>
  );
}

const mapDispatchToProps = (dispatch) => ({
  increment: (timeType) => dispatch(increment(timeType)),
});

export default connect(null, mapDispatchToProps)(Home);
