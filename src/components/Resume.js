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
            <h3>
              {/* Foreign languages */}
              Języki obce
            </h3>
            <hr />
            <p style={{ marginTop: "10px" }}>
              {" "}
              {/* English - B2 */}
              angielski - B2
            </p>
            <h3 style={{ marginTop: "20px" }}>
              {/* Interests */}
              Zainteresowania
            </h3>
            <hr />
            <ul style={{ margin: "20px 0 0 20px" }}>
              <li>
                {/* weight lifting */}
                ćwiczenia na siłowni
              </li>
              <li>
                {/* climbing */}
                wspinaczka
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Resume;
