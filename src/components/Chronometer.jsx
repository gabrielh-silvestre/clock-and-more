import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { increment, reset } from '../actions';

function Chronometer(props) {
  const {
    reset,
    increment,
    time: { second, minute, hour },
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

  useEffect(() => {
    if (hour > 23) {
      reset('hour');
    }
  }, [reset, hour]);

  return (
    <section>
      <h2>
        <span>{hour < 10 ? `0${hour}` : hour}</span>
        <span>{minute < 10 ? `0${minute}` : minute}</span>
        <span>{second < 10 ? `0${second}` : second}</span>
      </h2>
    </section>
  );
}

const mapStateToProps = (state) => ({
  time: state.time,
});

const mapDispatchToProps = (dispatch) => ({
  reset: (timeType) => dispatch(reset(timeType)),
  increment: (timeType) => dispatch(increment(timeType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chronometer);
