import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  const handleIncreaseClick = () => {
    setCount(count + 1);
  };

  const handleResetClick = () => {
    setCount(0);
  };

  const handleDecreaseClick = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>count: {count}</p>
      <button onClick={handleIncreaseClick}>Increase</button>
      <button onClick={handleDecreaseClick}>decrease</button>
      <button onClick={handleResetClick}>Reset</button>
    </>
  );
}

export default CounterApp;
