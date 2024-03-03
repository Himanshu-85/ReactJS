import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5;
  const incValue = () => {
    setCounter(counter + 1);
  };

  const decValue = () => {
    counter <= 0 ? setCounter(counter) : setCounter(--counter);
    console.log("clicked", counter);
  };
  return (
    <>
      <h1>Cahi aur react</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={incValue}>inc value</button>
      <br />
      <button onClick={decValue}>dec value</button>
    </>
  );
}

export default App;
