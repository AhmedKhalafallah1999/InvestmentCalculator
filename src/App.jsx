import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [dataInputs, setDataInput] = useState({
    InitialInvestment: 10000,
    AnnualInvestment: 1200,
    ExpectedReturn: 6,
    Duration: 10,
  });
  const inputsIsValid = dataInputs.Duration >= 1;
  const handleChange = (inputIdentifier, newValue) => {
    setDataInput((prevValues) => {
      return {
        ...prevValues,
        [inputIdentifier]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput onChange={handleChange} dataInputs={dataInputs} />
      {inputsIsValid && <Results dataInputs={dataInputs} />}
      {!inputsIsValid && (
        <p className="center">Please enter a duration more than 0</p>
      )}
    </>
  );
}

export default App;
