import React, { Component } from "react";
import Resume from "./components/Resume";
import Instructions from "./components/Instructions";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="invisible">
          <Instructions></Instructions>
        </div>
        <React.StrictMode>
          <Resume />
          <div className="divFooter">
            {/* I agree to the processing of personal data provided in this document
          for realising the recruitment process pursuant to the Personal Data
          Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in
          agreement with Regulation (EU) 2016/679 of the European Parliament and
          of the Council of 27 April 2016 on the protection of natural persons
          with regard to the processing of personal data and on the free
          movement of such data, and repealing Directive 95/46/EC (General Data
          Protection Regulation) */}
            Wyrażam zgodę na przetwarzanie danych osobowych zawartych w
            niniejszym dokumencie do realizacji procesu rekrutacji zgodnie z
            ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz.
            Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu
            Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w
            sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
            osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (RODO).
          </div>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
