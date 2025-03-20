  import React, { useState } from "react";

  export default function App() {
    const [scoreWidth, setScoreWidth] = useState("0%");

    const updateWidth =(e) => {
      const value = Number(e.target.value);
      if(value >= 0 && value <=10){
        setScoreWidth(`${value * 10}%`);
      }
    }

    const getScoreBarStyle = () => {
      // 1- Compute width
      // const scoreWidth = `40%`;
      
      // 2- Compute color (optional)
      let scoreColor;
      let numericWidth = parseInt(scoreWidth);
      if(numericWidth <= 50){
        scoreColor = `#f3bc47`;
      }
      else{
        scoreColor = `#a9d453`;
      }

      // 3 - Return the style object
      return {
        width: scoreWidth,
        backgroundColor: scoreColor,
      };
    };

  return (
    <>
      <div className="score-panel">
        <h1>My Score in React</h1>

        <small>Enter a score (0 to 10): </small>
        <input type="number" min="0" max="10" onChange={updateWidth}></input>

        <div className="score-bar">
          <div className="score-bar-value" style={getScoreBarStyle()}></div>
        </div>
      </div>
    </>
  );
}
