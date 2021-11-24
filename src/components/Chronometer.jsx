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
    <section className="flex justify-center text-gray-300">
      <h2 className="text-5xl">
        <span className="mx-2 font-bold">{hour < 10 ? `0${hour}` : hour}</span>
        <span>:</span>
        <span className="mx-2 font-bold">{minute < 10 ? `0${minute}` : minute}</span>
        <span>:</span>
        <span className="mx-2 font-bold">{second < 10 ? `0${second}` : second}</span>
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
