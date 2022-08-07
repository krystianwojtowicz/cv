import React, { Component } from "react";
import Resume from "./components/Resume";
import Instructions from "./components/Instructions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Instructions></Instructions>
        <Resume />
        <div className="divFooter">footer</div>
      </>
    );
  }
}

export default App;
