import { useState } from "react";
import Die from "./components/Die";

function App() {
  const [dice, setDice] = useState(getDice);
  function rollD6() {
    return Math.floor(Math.random() * 6 + 1);
  }

function handleClick() {
  setDice(() => getDice())
}

  function getDice() {
    const diceArray = new Array(10)
      .fill()
      .map((die, index) => <Die key={index} value={() => rollD6()} />);
    return diceArray;
  }
  return (
    <main className="App">
      <h1>Tenzies</h1>
      <section className="dice">{dice}</section>
      <button onClick={handleClick}>Roll Dice</button>
    </main>
  );
}

export default App;
