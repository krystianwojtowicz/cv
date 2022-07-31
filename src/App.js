import React, { Component } from "react";
import Resume from "./components/Resume";
import Instructions from "./components/Instructions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Instructions></Instructions>
        <Resume></Resume>
      </>
    );
  }
}

export default App;
