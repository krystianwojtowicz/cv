import React, { Component } from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Summary from "./Summary";

class Resume extends Component {
  render() {
    return (
      <>
        <div id="resume">
          <div id="personal">
            <Personal></Personal>
          </div>
          <div id="other">
            <Summary></Summary>
            <Experience></Experience>
            <Education></Education>
            <h3>Języki obce</h3>
            <hr />
            <p style={{ marginTop: "10px" }}>angielski - B2</p>
            <h3 style={{ marginTop: "20px" }}>Zainteresowania</h3>
            <hr />
            <ul style={{ margin: "20px 0 0 20px" }}>
              <li>ćwiczenia na siłowni</li>
              <li>wspinaczka</li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
