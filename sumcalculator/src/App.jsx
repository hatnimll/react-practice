import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const sum =
    (isNaN(Number(num1)) ? 0 : Number(num1)) +
    (isNaN(Number(num2)) ? 0 : Number(num2));

  return (
    <>
      <input
        type="text"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Enter first number"
      />
      <input
        type="text"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Enter second number"
      />
      <p>두 숫자의 합: {sum}</p>
    </>
  );
}

export default App;
