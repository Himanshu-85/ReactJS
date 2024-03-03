import { useCallback, useEffect, useState } from "react";
// import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // cache the results
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*(){}[];~_+=";

    for (let i = 0; i <= length; i++) {
      let randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
      setPassword(pass);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  // runs the function
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full text-orange-500 bg-gray-700 text-3xl max-w-xl px-4 py-3 mx-auto my-8 rounded-lg shadow-md ">
        <h1 className="text-white text-center my-4">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            Number
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            Characters
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
