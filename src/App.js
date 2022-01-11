import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [hidden, setHidden] = useState(false);

  const handleEnter = () => {
    setHidden(true);
  };

  useEffect(() => {
    const refresh = setInterval(() => {
      setHidden(false);
    }, 5000);

    return () => clearInterval(refresh);
  }, []);

  return (
    <div className="App" style={{ display: hidden ? "none" : "block" }}>
      <header className="App-header">
        <h1>Golfstöðin</h1>
        <p>Enter your reservation code to unlock:</p>
        <input
          placeholder="******"
          type="number"
          style={{
            border: "none",
            backgroundColor: "transparent",
            color: "white",
            fontSize: "2em",
            textAlign: "center",
            borderRadius: "15px",
          }}
        />
        <button
          style={{
            margin: ".5em",
            fontSize: "2em",
            borderRadius: "15px",
            backgroundColor: "transparent",
            color: "white",
          }}
          onClick={handleEnter}
        >
          Enter
        </button>
      </header>
    </div>
  );
};

export default App;
