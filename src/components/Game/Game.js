import React from "react";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessResults from "../GuessResults/GuessResults";
import GuessInput from "../GuessInput/GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessResults, setGuessResults] = React.useState([]);

  const handleGuessSubmit = (tempGuess) => {
    setGuessResults([...guessResults, tempGuess]);
  };

  return (
    <div className="guess-results">
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput handleGuessSubmit={handleGuessSubmit} />
    </div>
  );
}

export default Game;
