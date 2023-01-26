import Die from "./components/Die";

function App() {

  const dieArray = new Array(10).fill().map((die, index) => <Die  key={index}/>)
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
