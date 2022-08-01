import React, { Component } from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import Education from "./Education";
import ReactToPrint from "react-to-print";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

class ComponentToPrint extends Component {
  render() {
    return (
      <>
        <div>
          {/* usunac strictmode w index.js by nie miec bledu przy  drukowaniu */}
          {/* <Personal></Personal>
        <Experience></Experience> */}
          <Education></Education>
        </div>
      </>
    );
  }
}

class Resume extends React.PureComponent {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <a href="#">Print this out!</a>;
          }}
          content={() => this.componentRef}
        />
        <ComponentToPrint ref={(el) => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Resume;