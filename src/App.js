
import React from 'react';
import './index.css';
import Home from './components/Home';
import Navigator from './components/Navigator';
import Summary from './components/Summary';
import Languages from './components/Languages';
import Projects from './components/Projects';
import Career from './components/Career';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Progress from './components/Progress';



function App() {
  return (
    <>
    
    <Progress />
    <div className ="container">
      <Navigator />
      <Home />
      <Summary />
      <Languages />
      <Projects />
      <Career />
      <About />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;
