import React from 'react';
import { connect } from 'react-redux';

import Time from './Time';

function Clock(props) {
  const {
    time: { second, minute, hour },
  } = props;

  return (
    <section className="flex justify-center text-gray-300">
      <h2 className="text-5xl">
        <Time timeValue={hour} />
        <span>:</span>
        <Time timeValue={minute} />
        <span>:</span>
        <Time timeValue={second} />
      </h2>
    </section>
  );
}

const mapStateToProps = (state) => ({
  time: state.time,
});

export default connect(mapStateToProps, null)(Clock);
