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
          dates: "10.2019 - obecnie",
          companyAndCity: "Solid Security Sp. z o.o., Warszawa",
          positionAndMainDuties: [
            {
              id: uniqid(),
              duty: "nadzór oraz prowadzenie ewidencji stanów magazynowych",
            },
            {
              id: uniqid(),
              duty: "nadzór nad prawidłowością danych w wewnętrznym systemie ROF",
            },
            {
              id: uniqid(),
              duty: "współpraca z kilkudziesięcioma oddziałami firmy w zakresie realizacji ich potrzeb (w tym codzienna współpraca z centralą firmy)",
            },
            {
              id: uniqid(),
              duty: "nadzór nad prawidłowością danych znajdujących się w systemach obchodowych",
            },
          ],
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
    // e.currentTarget.parentElement.classList.remove("visible");
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
    // e.currentTarget.nextElementSibling.classList.add("visible");
  }

  render() {
    const { dates, companyAndCity, positionAndMainDuties, experience } =
      this.state;
    return (
      <div id="Experience">
        <h4>Doświadczenie zawodowe</h4>
        <hr />
        <div className="experience">
          {experience.map((exp) => {
            return (
              <div key={exp.id}>
                <p>{exp.dates}</p>
                <p>{exp.companyAndCity}</p>
                <p>Główne obowiązki</p>
                <ul className="experience-ul">
                  {exp.positionAndMainDuties.map((pos) => {
                    return <li key={pos.id}>{pos.duty}</li>;
                  })}
                </ul>
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
