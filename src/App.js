import "./index.css";
import Color from "./components/Color";
import { useState } from "react";

function App() {
  const [circleColor, setCircleColor] = useState("blue");
  const [rotation, setRotation] = useState(60);

  // setInterval(() => {
  //   setRotation(rotation + 30);
  // }, 300);

  return (
    <div className="App">
      <div className="colorSelect">
        <Color
          color="red"
          changeColor={() => {
            setCircleColor("red");
          }}
        />
        <Color
          color="blue"
          changeColor={() => {
            setCircleColor("blue");
          }}
        />
        <Color
          color="green"
          changeColor={() => {
            setCircleColor("green");
          }}
        />
        <Color
          color="purple"
          changeColor={() => {
            setCircleColor("purple");
          }}
        />
        <Color
          color="orange"
          changeColor={() => {
            setCircleColor("orange");
          }}
        />
      </div>
      <div
        className="mainCircle"
        style={{
          backgroundColor: circleColor,
        }}
      >
        <h1>H</h1>
      </div>
    </div>
  );
}

export default App;
