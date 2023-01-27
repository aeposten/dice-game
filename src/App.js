import { useState, useEffect } from "react";
import Die from "./components/Die";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(getDiceObjects());
  const [winner, setWinner] = useState(false);

  useEffect(isWinner, [dice]);

  function isWinner() {
    const forSet = dice.map((die) => (die.isHeld ? die.roll : die));
    const winningSet = new Set(forSet);
    if (winningSet.size === 1) {
      setWinner(true);
      console.log("winner");
    }
  }

  function rollD6() {
    return Math.floor(Math.random() * 6 + 1);
  }

  function handleClick() {
    if (winner) {
      setDice(getDiceObjects());
      setWinner(false);
    } else {
      setDice((prevDiceObjects) =>
        prevDiceObjects.map((dieObject, index) => {
          return dieObject.isHeld
            ? dieObject
            : {
                roll: rollD6(),
                isHeld: false,
                id: index,
              };
        })
      );
    }
  }

  function getDiceObjects() {
    const diceArray = new Array(10).fill().map((die, index) => ({
      roll: rollD6(),
      isHeld: false,
      id: index,
    }));
    return diceArray;
  }

  function setHeld(id) {
    setDice((prevDiceHtml) =>
      prevDiceHtml.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  function setDiceHtml() {
    const diceHtml = dice.map((die) => (
      <Die
        key={die.id}
        value={die.roll}
        held={die.isHeld}
        setHeld={() => setHeld(die.id)}
      />
    ));
    return diceHtml;
  }

  return (
    <>
      {winner && <Confetti />}
      <main className="App">
        <h1>Tenzies</h1>
        <section className="dice">{setDiceHtml()}</section>
        <button onClick={handleClick}>
          {winner ? "New Game" : "Roll Dice"}
        </button>
      </main>
    </>
  );
}

export default App;
