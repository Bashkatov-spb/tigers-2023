import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from '../features/counter/Counter';
import Json from '../features/json/Json';

function App(): JSX.Element {
  const [currentPage, setCurrentPage] = useState('counter');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button type="button" onClick={() => setCurrentPage('counter')}>
          Counter
        </button>
        <button type="button" onClick={() => setCurrentPage('json')}>
          JSON Page
        </button>
        {currentPage === 'counter' ? <Counter /> : <Json />}
      </header>
    </div>
  );
}

export default App;
