import React from 'react';
import Pizza from './components/Pizza';
import Homepage from './components/Homepage';
import { Route, Link, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div>
        <Link to="/">Home Page</Link>
        <Link to="/pizza">pizza</Link>
      </div>
      <div>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/pizza">
          <Pizza />
        </Route>
      </div>
    </div>
  );
};
export default App;
