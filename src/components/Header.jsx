import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { tool } = props;

  return (
    <header className="w-full fixed top-0 flex justify-center text-gray-300">
      <div className="w-10/12 flex justify-between items-center text-2xl py-4 px-8">
        <section>
          <h1>{ tool } (maybe more)</h1>
        </section>

        <nav className="flex">
          <Link className="mr-4" to="/">Chronometer</Link>
          <Link to="/timer">Timer</Link>
        </nav>
      </div>
    </header>
  );
}
