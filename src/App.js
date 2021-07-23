import React from "react";
import CircleChoose from "./component/circle-choose/circle-choose.component"
import "./app.scss"

function App() {
  return (
    <div className="App">
        <CircleChoose props="scissor" />
        <CircleChoose props="paper" />
      <CircleChoose props="rock" />
    </div>
  );
}

export default App;
