import React from "react";
import Guess from "../Guess/Guess";
import { range } from "../../utils";

function GuessResults({ guessResults, answer }) {
  return (
    <div className="guess-results">
      {range(6).map((i) => (
        <Guess key={i} word={guessResults[i]} answer={answer} />
      ))}
    </div>
  );
}

export default GuessResults;
