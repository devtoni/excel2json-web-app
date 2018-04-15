import React, { Component } from 'react';
import { Main } from '../Main/Main'
import { Topbar } from '../Topbar/Topbar'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar title='excel2json'/>
        </header>
        <Main />
      </div>
    );
  }
}

export default App;
