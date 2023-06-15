import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from '../features/counter/Counter';

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
