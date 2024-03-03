import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-screen h-screen duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>

          <button
            /**
             * onclick expects a function that is why here we used arrow func
             *
             * but id onClick={setColor("aqua")} - then this will not works because in this case we are returning a value to onClick where as it only expects a function.
             */

            onClick={() => setColor("aqua")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "aqua" }}
          >
            aqua
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>

          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            white
          </button>

          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
