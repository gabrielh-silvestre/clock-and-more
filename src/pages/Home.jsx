import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Chronometer from '../components/Chronometer';
import Timer from '../components/Timer';

export default function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Chronometer} />
          <Route path="/timer" component={Timer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
