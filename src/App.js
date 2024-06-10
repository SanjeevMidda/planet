import { useState } from "react";
import "./index.css";

function App() {
  let colors = [
    "blue",
    "red",
    "green",
    "yellow",
    "grey",
    "pink",
    "brown",
    "orange",
    "purple",
  ];

  let newColors = () => {
    let colorOne = colors[Math.floor(Math.random() * colors.length)];
    let colorTwo = colors[Math.floor(Math.random() * colors.length)];

    return {
      colorOne: colorOne,
      colorTwo: colorTwo,
    };
  };

  const [createNewColor, setCreateNewColor] = useState(newColors());

  let styles = {
    background: `conic-gradient(${createNewColor.colorOne}, ${createNewColor.colorTwo})`,
  };

  return (
    <div className="App">
      <div className="textContainer">
        <h1>PLANET</h1>
        <div
          className="circle"
          style={styles}
          onClick={() => setCreateNewColor(newColors())}
        ></div>
      </div>
    </div>
  );
}

export default App;
