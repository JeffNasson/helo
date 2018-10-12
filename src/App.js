import React, { Component } from 'react';
import './App.css';

//components
import routes from './routes.js'
import Nav from './components/Nav/Nav.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
