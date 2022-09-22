import React, { useState } from "react";
import LittleSquare from "./LittleSquare";

export default function Table({ value }) {
  const [steps, setSteps] = React.useState(Array(9).fill(null));
  const [xChoice, setXchoice] = useState(true);

  const click = (i) => {
    setXchoice(!xChoice);

    steps[i] = xChoice ? "X" : "O";
    setSteps(steps);
    console.log(steps[i]);
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
        {/* <div className="button">
          <button>Computer</button>
          <button>your tout</button>
        </div> */}
      </div>
    </>
  );
}
