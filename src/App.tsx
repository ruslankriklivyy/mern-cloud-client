import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Registration from './components/Registration';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/registration" component={Registration} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
