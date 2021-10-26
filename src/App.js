import "./App.css";

import Desenvolvedores from "./components/Developer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Desenvolvedores name={"Gabriel"} age={"19"} country={"Brasil"} />
        <Desenvolvedores name={"Filipe"} age={"28"} country={"Brasil"} />
        <Desenvolvedores name={"Mariana"} age={"24"} country={"Itália"} />
      </header>
    </div>
  );
}

export default App;
