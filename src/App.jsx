import { useState } from 'react';

import Calculator from './components/Calculator';
import Header from './components/Header';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(initialInputValue, newInputValue) {
    setUserInput((previousInput) => {
      return { ...previousInput, [initialInputValue]: +newInputValue };
    });
  }

  return (
    <>
      <Header />
      <Calculator onChange={handleChange} userInput={userInput} />
      {!inputIsValid && (
        <p className="center">Please enter a duration greater than zero.</p>
      )}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
}

export default App;
