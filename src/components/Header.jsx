import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
  const {
    tool,
    clockStats: { isActive },
  } = props;

  return (
    <header className="w-full fixed top-0 flex justify-center text-gray-300">
      <div className="w-10/12 flex justify-between items-center text-2xl py-4 px-8">
        <section>
          <h1 className="text-4xl">{tool} (maybe more)</h1>
        </section>

        <nav className="flex">
          {isActive ? (
            <div className="mr-4 opacity-60">Chronometer</div>
          ) : (
            <Link className="mr-4" to="/">
              Chronometer
            </Link>
          )}

          {isActive ? (
            <div className="opacity-60">Timer</div>
          ) : (
            <Link to="/timer">Timer</Link>
          )}
        </nav>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  clockStats: state.chronometer,
});

export default connect(mapStateToProps, null)(Header);
