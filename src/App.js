

import React from 'react';
import './index.css';
import Home from './components/Home';
import Navigator from './components/Navigator';
import Summary from './components/Summary';
import Languages from './components/Languages';
import Projects from './components/Projects';


function App() {
  return (
    <div className ="container">
      <Navigator />
      <Home />
      <Summary />
      <Languages />
      <Projects />
       
    </div>
  );
}

export default App;
