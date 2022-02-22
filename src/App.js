import { useState } from "react";

function App() {
  const ColorButton = (props) => (
    <div style={{ backgroundColor: props.color }}>
      <Counter />
    </div>
  );

  return (
    <div className="App">
      <h1>React Challenge</h1>
      <h2>
        Change the counter background color only using hoc, without touching
        Counter component
      </h2>
      <ColorButton color="#ff4d4d" />
      <ColorButton color="#196619" />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
}

export default App;
