import React from 'react';
import { Route, Switch } from 'react-router';
import Chronometer from '../components/Chronometer';
import Timer from '../components/Timer';

export default function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <Switch>
        <Route exact path="/" component={Chronometer} />
        <Route path="/timer" component={Timer} />
      </Switch>
    </div>
  );
}
