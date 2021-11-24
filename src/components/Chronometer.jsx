import React from 'react';
import { connect } from 'react-redux';

function Chronometer(props) {
  const { hour, minute, second } = props.time;

  return (
    <section>
      <h2>
        <span>{hour}</span>
        <span>{minute}</span>
        <span>{second}</span>
      </h2>
    </section>
  );
}

const mapStateToProps = (state) => ({
  time: state.time,
});

export default connect(mapStateToProps, null)(Chronometer);
