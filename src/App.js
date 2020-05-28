import "./App.css";
import React, { useState } from "react";
import { Typography } from "@material-ui/core";

import FormHandler from "./components/FormHandler";
import Stopwatch from "./components/Stopwatch";
import notifyChange from "./components/ChangeNotifier";

function App() {
  
  let [workout, setWorkout] = useState({ exercises: [] });

  return (
    <div className="App">
      <Typography
        variant="h2"
        style={{ paddingTop: 10, paddingBottom: 10, userSelect: "none" }}
      >
        WORKOUT TIMER
      </Typography>
      <FormHandler workout={workout} setWorkout={setWorkout} />
      
      {workout.exercises.length === 0 && (
        "SETTINGS AND HELP"
      )}

      {workout.exercises.length > 0 && (
        <Stopwatch workout={workout} notifyChange={notifyChange} />
      )}
    </div>
  );
}

export default App;
