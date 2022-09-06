import "./App.scss";
import { useState, useEffect } from "react";

const App = () => {

  const [message, setMessage] = useState("");

  const welcome = () => {
    fetch('/welcome')
    const text = Response.text();
      setMessage(text);
  }

  useEffect(() => {
    welcome();
  }, [message]);

  return (
    <div className="app">
      <header className="greeting">
        <h1 className="greeting__heading">{message}</h1>
      </header>
    </div>
  );
};

export default App;