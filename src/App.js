import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  function onHandleClick() {
    setVisible(true);
  }


  return (
    <div className="App">
      <input id="input" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onHandleClick} id="button">Show</button>
      {visible && <p id="p">{name}</p>}
    </div>
  );
}

export default App;
