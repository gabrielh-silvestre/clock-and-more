import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTime } from '../actions';

function Time(props) {
  const { timeValue, timeType, setTime } = props;

  function handleChange({ target: { value }}) {
    setTime(timeType, Number(value));
  }

  return (
    <input
      type="number"
      name={timeType}
      id={timeType}
      value={timeValue < 10 ? `0${timeValue}` : timeValue}
      onChange={ handleChange }
    />
  );
}

const mapDispatchToProps = (dispatch) => ({
  setTime: (timeType, timeValue) => dispatch(setTime(timeType, timeValue)),
});

Time.propTypes = {
  timeValue: PropTypes.number.isRequired,
  timeType: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Time);
