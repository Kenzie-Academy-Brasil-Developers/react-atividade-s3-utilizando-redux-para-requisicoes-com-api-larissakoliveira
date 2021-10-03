import "./App.css";
import Search from "./components/Search";
import Digimons from "./components/Digimons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Search />
        <Digimons />
      </header>
    </div>
  );
}

export default App;