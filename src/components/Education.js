import React, { Component } from "react";
import uniqid from "uniqid";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      dates: "",
      UniversityAndCity: "",
      field: "",
      education: [
        {
          id: uniqid(),
          dates: "2011-2016",
          UniversityAndCity: "Politechnika Warszawska",
          field: "elektrotechnika",
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
    const { dates, UniversityAndCity, field, education } = this.state;
    const educationNew = {
      id: uniqid(),
      dates,
      UniversityAndCity,
      field,
    };

    this.setState((prevState) => ({
      dates: "",
      UniversityAndCity: "",
      field: "",
      education: [...prevState.education, educationNew],
    }));
  };

  handleAdd(e) {
    e.currentTarget.nextElementSibling.classList.add("visible");
  }

  render() {
    const { dates, UniversityAndCity, field, education } = this.state;

    return (
      <div id="Education">
        <h3>Wykształcenie</h3>
        <hr />
        {education.map((educ) => {
          return (
            <div key={educ.id}>
              <p>{educ.dates}</p>
              <p>
                <b>{educ.UniversityAndCity}</b>
              </p>
              <label htmlFor="field">kierunek: </label>
              <p style={{ display: "inline" }}>{educ.field}</p>
            </div>
          );
        })}
        <button onClick={this.handleAdd} className="adding">
          Dodaj
        </button>
        <div className="add-education">
          <input
            type="text"
            placeholder="dates"
            name="dates"
            value={this.state.dates}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="university and city"
            name="UniversityAndCity"
            value={this.state.UniversityAndCity}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="field"
            name="field"
            value={this.state.field}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Dodaj</button>
        </div>
      </div>
    );
  }
}

export default Education;
