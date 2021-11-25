import React from 'react';
import PropTypes from 'prop-types';

export default function Time(props) {
  const { timeValue } = props;

  return (
    <span className="mx-2 font-bold">{timeValue < 10 ? `0${timeValue}` : timeValue}</span>
  );
}

Time.propTypes = {
  timeValue: PropTypes.number.isRequired,
};
