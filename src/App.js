import React, { Component } from 'react';
import './App.css';
import BuildList from './components/BuildList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>TC Build React(or)</h1>
        <BuildList/>
      </div>
    );
  }
}

export default App;
