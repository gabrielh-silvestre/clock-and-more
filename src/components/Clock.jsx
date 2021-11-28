import React from 'react';
import { connect } from 'react-redux';

import Time from './Time';

function Clock(props) {
  const {
    time: { second, minute, hour },
  } = props;

  return (
    <section className="flex justify-center text-gray-300">
      <div className="w-4/12 flex text-5xl">
        <Time timeValue={hour} timeType={'hour'} />
        <span>:</span>
        <Time timeValue={minute} timeType={'minute'} />
        <span>:</span>
        <Time timeValue={second} timeType={'second'} />
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  time: state.time,
});

export default connect(mapStateToProps, null)(Clock);
