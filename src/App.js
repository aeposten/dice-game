import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(getDiceObjects);
  function rollD6() {
    return Math.floor(Math.random() * 6 + 1);
  }

  function handleClick() {
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
    <main className="App">
      <h1>Tenzies</h1>
      <section className="dice">{setDiceHtml()}</section>
      <button onClick={handleClick}>Roll Dice</button>
    </main>
  );
}

export default App;
