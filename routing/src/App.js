import React from 'react'
import './App.css';
import About from './About';
import Nav from "./Nav";
import Shop from './Shop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      
        <switch>

        <Route path="/" exact component={Home} />
        <Route path="/About"  component={About} />
        <Route path="/Shop" component={Shop} />
        
        </switch>
      
    </div>
    </Router>
  );
}

const Home =() => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
