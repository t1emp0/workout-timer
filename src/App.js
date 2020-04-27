import "./App.css";
import React from "react";

import FormHandler from "./components/FormHandler";
import notifyChange from "./components/ChangeNotifier";
import { Typography } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Typography variant="h1">WORKOUT TIMER</Typography>
      <FormHandler notifyChange={notifyChange} />
    </div>
  );
}

export default App;
