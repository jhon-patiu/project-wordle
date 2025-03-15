import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
function Guess({ word, answer }) {
  const result = checkGuess(word, answer);

  const Cell = ({ letter, status }) => {
    return <span className={`cell ${status}`}>{letter}</span>;
  };

  return (
    <p className="guess">
      {range(5).map((i) => (
        <Cell
          key={i}
          letter={result && result[i].letter}
          status={result && result[i].status}
        />
      ))}
    </p>
  );
}

export default Guess;
