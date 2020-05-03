import "./App.css";
import React from "react";
import { Typography } from "@material-ui/core";

import FormHandler from "./components/FormHandler";
import notifyChange from "./components/ChangeNotifier";

function App() {
  return (
    <div className="App">
      <Typography variant="h1">WORKOUT TIMER</Typography>
      <FormHandler notifyChange={notifyChange} />
    </div>
  );
}

export default App;
