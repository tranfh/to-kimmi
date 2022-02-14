import "./App.css";
import TypeWriter from "./typer";
import Poem from "./poem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TypeWriter />
        <div id="showMe">
          <Poem />
        </div>
      </header>
    </div>
  );
}

export default App;
