import React, { useEffect, useState } from "react";
import checkWinner from "../Common/checkWinner";
import LittleSquare from "./LittleSquare";

export default function Table({ value }) {
  const [steps, setSteps] = React.useState(Array(9).fill(null));
  const [xChoice, setXchoice] = useState(true);

  const winner = checkWinner(steps);

  let saved = localStorage.getItem("winnerSave")
    ? JSON.parse(localStorage.getItem("winnerSave"))
    : [];

  useEffect(() => {
    if (winner) {
      console.log(winner);

      if (saved.length < 10) {
        saved.push(winner);
        localStorage.setItem("winnerSave", JSON.stringify(saved));
      } else {
        saved.shift(winner);
        saved.push(winner);
        localStorage.setItem("winnerSave", JSON.stringify(saved));
      }
    }
  }, [winner]);

  const click = (i) => {
    setXchoice(!xChoice);
    const stepsCopy = [...steps];
    if (winner || stepsCopy[i]) return;
    steps[i] = xChoice ? "⚔️" : "💣";
    setSteps(steps);
  };

  const reset = () => {
    setSteps(Array(9).fill(null));
  };

  return (
    <>
      <div className="table-row">
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
      </div>
      <div className="button-row">
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="winner-row">
        <div> Winner is {winner}</div>
      </div>
      <div className="winner-history-row">
        {" "}
        <h6>Last 10 winners were: </h6>
        {saved.map((m, i) => (
          <div key={i}>
            {" "}
            <span>{i + 1}</span> {m}
          </div>
        ))}
      </div>
    </>
  );
}
