import React, { Component } from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";

class Resume extends Component {
  render() {
    return (
      <>
        {/* <Personal></Personal>
        <Experience></Experience> */}
        <Education></Education>
      </>
    );
  }
}

export default Resume;
