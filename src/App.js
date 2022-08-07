import React, { Component } from "react";
import Resume from "./components/Resume";
import Instructions from "./components/Instructions";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="invisible">
          <Instructions></Instructions>
        </div>

        <Resume />
        <div className="divFooter">
          Wyrażam zgodę na przetwarzanie danych osobowych zawartych w niniejszym
          dokumencie do realizacji procesu rekrutacji zgodnie z ustawą z dnia 10
          maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz.
          1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady
          (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób
          fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
          swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
          (RODO).
        </div>
      </>
    );
  }
}

export default App;
