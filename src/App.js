import React, { Component } from 'react';

import People from './containers/People/People';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <People />
      </div>
    );
  }
}

export default App;
