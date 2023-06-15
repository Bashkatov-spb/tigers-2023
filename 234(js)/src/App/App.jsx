import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  function onHandlePlus() {
    setCount((prev) => prev + step);
  }

  function onHandleMinus() {
    setCount(count - step);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input onChange={(event) => setStep(event.target.value)} type="number" />
        <button onClick={onHandlePlus}>Plus</button>
        <h3>{count}</h3>
        <button onClick={onHandleMinus}>Minus</button>
      </header>
    </div>
  );
}

export default App;
