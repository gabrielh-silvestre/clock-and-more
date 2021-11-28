import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTime } from '../actions';

function Time(props) {
  const {
    timeValue,
    timeType,
    setTime,
    runStats: { isActive },
  } = props;

  function handleChange({ target: { value } }) {
    if (timeType === 'minute' || timeType === 'second') {
      let timeLimit = 0;

      if (value > 59) timeLimit = 0;
      else if (value < 0) timeLimit = 59;
      else timeLimit = value;

      setTime(timeType, Number(timeLimit));
    }

    if (timeType === 'hour') {
      setTime(timeType, Number(value < 0 ? 0 : value));
    }
  }

  return (
    <input
      type="number"
      name={timeType}
      id={timeType}
      className="w-full flex text-center bg-gray-800 outline-none"
      value={timeValue < 10 ? `0${timeValue}` : timeValue}
      disabled={ isActive }
      onChange={handleChange}
    />
  );
}

const mapStateToProps = (state) => ({
  runStats: state.chronometer,
});

const mapDispatchToProps = (dispatch) => ({
  setTime: (timeType, timeValue) => dispatch(setTime(timeType, timeValue)),
});

Time.propTypes = {
  timeValue: PropTypes.number.isRequired,
  timeType: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Time);
