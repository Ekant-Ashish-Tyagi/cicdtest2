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
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onHandleClick}>Show</button>
      {visible && <p>{name}</p>}
    </div>
  );
}

export default App;
