import React, { Component } from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import Pdf from "react-to-pdf";
const ref = React.createRef();

class Resume extends Component {
  render() {
    return (
      <>
        <div ref={ref}>
          {/* <Personal></Personal>
        <Experience></Experience> */}
          <Education></Education>
        </div>
        <Pdf targetRef={ref} filename="post.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate PDF</button>}
        </Pdf>
      </>
    );
  }
}

export default Resume;
