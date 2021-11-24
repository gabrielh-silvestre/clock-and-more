import React from 'react'
import PropTypes from 'prop-types'

export default function Button(props) {
  return (
    <button onClick={ props.handleClick }>
      { props.btnText }
    </button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  btnText: PropTypes.string.isRequired,
}
