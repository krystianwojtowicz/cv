import React, { Component } from "react";
import Resume from "./components/Resume";
import Instructions from "./components/Instructions";
import { PDFDownloadLink } from "@react-pdf/renderer";
import ResumeToPrint from "./components/ResumeToPrint";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <PDFDownloadLink document={<ResumeToPrint />} fileName="Form ">
          {({ loading }) =>
            loading ? (
              <button>Loading Document...</button>
            ) : (
              <button>Download</button>
            )
          }
        </PDFDownloadLink>
        <ResumeToPrint></ResumeToPrint>
        <Instructions></Instructions>
        <Resume />
      </>
    );
  }
}

export default App;
