import "./App.css";
import React from "react";

import Stopwatch from "./components/Stopwatch";
import events from "./events";

function App() {
  return (
    <div className="App">
      <Stopwatch events={events} />
    </div>
  );
}

export default App;
