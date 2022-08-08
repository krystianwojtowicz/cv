import React, { Component } from "react";
import uniqid from "uniqid";

class Experience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      dates: "",
      companyAndCity: "",
      positionAndMainDuties: "",
      experience: [
        {
          id: uniqid(),
          dates: "10/2019 - obecnie",
          companyAndCity: "Solid Security Sp. z o.o., Warszawa",
          positionAndMainDuties:
            " Nadzór oraz prowadzeni ewidencji stanów magazynowych, nadzór nad prawidłowością danych w wewnętrznym systemie ROF, współpraca z kilkudziesięcioma oddziałami firmy w zakresie, realizacji ich potrzeb (w tym codzienna współpraca z centralą firmy), nadzór nad prawidłowością danych znajdujących się w systemach obchodowych.",
        },
        {
          id: uniqid(),
          dates: "9/2019",
          companyAndCity: "CTDI Poland Sp. z o.o",
          positionAndMainDuties:
            "Diagnoza, naprawa i dokumentowanie naprawy urządzeń zgodnie z procedurami i wytycznymi, w tym: diagnoza usterek jak również wykonywanie stosownych pomiarów urządzeń, wymiana zdiagnozowanych modułów elektronicznych, aktualizacja oprogramowania oraz wykonywanie wymaganych strojeń, wykonywanie specjalistycznych testów zgodności urządzeń, ykonywanie ekspertyz technicznych urządzeń. Praca jako serwisant urządzeń elektrycznych.",
        },
        {
          id: uniqid(),
          dates: "2/2018 - 8/2019",
          companyAndCity: "Cyfrowy Polsat",
          positionAndMainDuties: "skanowanie kart i dekoderów",
        },
        {
          id: uniqid(),
          dates: "1/2019 - 3/2019",
          companyAndCity: "Group AV Sp. z o.o",
          positionAndMainDuties:
            "projektowanie systemów audiowizualnych, analiza rynku pod kątem pozyskania specjalistycznych urządzeń spełniających wymagania realizowanego projektu zgodnie ze specyfikacją techniczną.",
        },
        {
          id: uniqid(),
          dates: "08/2015 – 11/2016",
          companyAndCity: "INF ENERG Sp. z o. o",
          positionAndMainDuties:
            "opisywanie elementów elektrycznych, paszportyzacja sieci",
        },
        {
          id: uniqid(),
          dates: "07/2014 – 08/2014",
          companyAndCity: "Bombardier Transportation Polska Sp. z o. o.",
          positionAndMainDuties:
            "edytowanie projektów w programie AutoCAD, pomoc w realizacji etapów prac projektowych związanych z nowymi oraz modernizowanymi wyrobami taboru kolejowego, ścisła współpraca z działami zaangażowanymi w realizację projektów taboru kolejowego, wsparcie techniczne przy realizacji umów. Były to praktyki studenckie",
        },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value,
    });
  }

  handleClick = (e) => {
    e.currentTarget.parentElement.classList.remove("visible");
    const { dates, companyAndCity, positionAndMainDuties, experience } =
      this.state;
    const experienceNew = {
      id: uniqid(),
      dates,
      companyAndCity,
      positionAndMainDuties,
    };
    this.setState((prevState) => ({
      dates: "",
      companyAndCity: "",
      positionAndMainDuties: "",
      experience: [...prevState.experience, experienceNew],
    }));
  };

  handleAdd(e) {
    e.currentTarget.nextElementSibling.classList.add("visible");
  }

  render() {
    const { dates, companyAndCity, positionAndMainDuties, experience } =
      this.state;
    return (
      <div id="Experience">
        <h3>Doświadczenie zawodowe</h3>
        <hr />
        <div className="experience">
          {experience.map((exp) => {
            return (
              <div key={exp.id}>
                <p>{exp.dates}</p>
                <p>
                  <b>{exp.companyAndCity}</b>
                </p>
                <p>Główne obowiązki:</p>
                <p>{exp.positionAndMainDuties}</p>
              </div>
            );
          })}
        </div>
        <button onClick={this.handleAdd} className="adding">
          Dodaj
        </button>
        <div className="add-experience">
          <input
            onChange={this.handleChange}
            value={this.state.dates}
            type="text"
            placeholder="dates"
            name="dates"
          />
          <input
            onChange={this.handleChange}
            value={this.state.companyAndCity}
            type="text"
            placeholder="company and city"
            name="companyAndCity"
          />
          <input
            onChange={this.handleChange}
            value={this.state.positionAndMainDuties}
            type="text"
            placeholder="position and main duties"
            name="positionAndMainDuties"
          />
          <button onClick={this.handleClick}>Dodaj</button>
        </div>
      </div>
    );
  }
}

export default Experience;
