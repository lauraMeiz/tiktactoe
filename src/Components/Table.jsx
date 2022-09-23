import React, { useState } from "react";
import checkWinner from "../Common/checkWinner";
import LittleSquare from "./LittleSquare";

export default function Table({ value }) {
  const [steps, setSteps] = React.useState(Array(9).fill(null));
  const [xChoice, setXchoice] = useState(true);
  const winner = checkWinner(steps);

  const click = (i) => {
    setXchoice(!xChoice);
    const stepsCopy = [...steps];
    if (winner || stepsCopy[i]) return;
    steps[i] = xChoice ? "X" : "O";
    setSteps(steps);
    console.log(stepsCopy, "---", steps);
  };
  console.log(winner);
  const reset = () => {
    setSteps(Array(9).fill(null));
  };

  return (
    <>
      <div className="square-container">
        <h1>Tik tac toe</h1>
        <div className="table">
          {steps.map((step, i) => (
            <LittleSquare
              value={step}
              key={i}
              steps={step}
              click={() => click(i)}
            ></LittleSquare>
          ))}
        </div>

        <div className="button">
          <button onClick={reset}>Reset</button>
          {/* <button onClick={computer}>Computer</button> */}
        </div>
        <div> Winner is : {winner}</div>
      </div>
    </>
  );
}
