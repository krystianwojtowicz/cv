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

  handleClick = () => {
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

  render() {
    const { dates, UniversityAndCity, field, education } = this.state;

    return (
      <div id="Personal">
        {education.map((educ) => {
          return (
            <div key={educ.id}>
              <h2>{educ.dates}</h2>
              <h2>{educ.UniversityAndCity}</h2>
              <h2>{educ.field}</h2>
            </div>
          );
        })}

        <div>
          <input
            type="text"
            placeholder="dodaj daty"
            name="dates"
            value={this.state.dates}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="dodaj uczelnie i miasto"
            name="UniversityAndCity"
            value={this.state.UniversityAndCity}
            onChange={this.handleChange}
          />
          <input
            type="text"
            placeholder="dodaj kierunek"
            name="field"
            value={this.state.field}
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.handleClick}>Dodaj</button>
        </div>
      </div>
    );
  }
}

export default Education;
