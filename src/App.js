import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button theme="tertiary">Learn React</Button>
      </header>
    </div>
  );
}

export default App;
