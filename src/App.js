import Die from "./components/Die";

function App() {

  function rollD6() {
    return Math.floor(Math.random() * 6 + 1);
  }


  const dieArray = new Array(10).fill().map((die, index) => <Die  key={index} value={rollD6}/>)
  return (
    <main className="App">
      <h1>Tenzies</h1>
      <section className="dice">
        {dieArray}
      </section>
    </main>
  );
}

export default App;
