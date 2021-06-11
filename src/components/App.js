import React from "react";
import Nav from "./Nav";
import PigPen from "./PigPen"

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <PigPen hogs={hogs} />
    </div>
  );
}

export default App;
