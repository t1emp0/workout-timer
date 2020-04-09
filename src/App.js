import "./App.css";
import React from "react";

import FormHandler from "./components/FormHandler";
import notifyChange from "./components/ChangeNotifier";

function App() {
  return (
    <div className="App">
      <FormHandler notifyChange={notifyChange}/>
    </div>
  );
}

export default App;
