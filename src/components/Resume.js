import React, { Component } from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import ReactToPrint from "react-to-print";

class Resume extends Component {
  render() {
    return (
      <>
        <div id="resume">
          <div id="personal">
            <Personal></Personal>
          </div>
          <div id="other">
            <Education></Education>
          </div>
          {/* usunac strictmode w index.js by nie miec bledu przy  drukowaniu -to w startm pdfie co nie ma stopki*/}
          {/* <Personal></Personal> */}
          {/* <Experience></Experience> */}
        </div>
      </>
    );
  }
}

// class Resume extends React.PureComponent {
//   render() {
//     return (
//       <div>
//         <ReactToPrint
//           trigger={() => {
//             // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
//             // to the root node of the returned component as it will be overwritten.
//             return <a href="#">Print this out!</a>;
//           }}
//           content={() => this.componentRef}
//         />
//         <ComponentToPrint ref={(el) => (this.componentRef = el)} />
//       </div>
//     );
//   }
// }

export default Resume;
