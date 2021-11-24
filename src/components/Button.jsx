import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { handleClick, className, btnText, children } = props;

  return (
    <button onClick={handleClick} className={className}>
      {btnText ? btnText : children}
    </button>
  );
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  btnText: PropTypes.string,
  className: PropTypes.string.isRequired,
};
