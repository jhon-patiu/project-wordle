import React from "react";
// import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ handleGuessSubmit }) {
  const [tempGuess, setTempGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleGuessSubmit(tempGuess);
    setTempGuess("");
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        id="guess-input"
        type="text"
        value={tempGuess}
        onChange={(e) => setTempGuess(e.target.value.toUpperCase())}
        pattern="[A-Za-z]{5}"
      />
    </form>
  );
}

export default GuessInput;
