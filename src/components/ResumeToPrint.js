import React from "react";
import Resume from "./Resume";
import ReactToPrint from "react-to-print";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const ResumeToPrint = () => {
  return (
    <Document>
      <Page>
        <Text>
          <Resume></Resume>
        </Text>
      </Page>
    </Document>
  );
};

export default ResumeToPrint;
