import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Navbar, AppRouter } from './components';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <AppRouter />
      </div>
    </Router>
  );
}

export default App;
