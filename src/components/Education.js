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
  }

  // handleChange(event) {
  //   this.setState({
  //     // Computed property names
  //     // keys of the objects are computed dynamically
  //     [event.target.name]: event.target.value,
  //   });
  // }
  // onSubmitTask(e) {
  //   e.preventDefault();
  //   e.currentTarget.classList.remove("visible");
  // }
  // handleClick(e) {
  //   e.currentTarget.nextElementSibling.classList.add("visible");
  // }

  handleDates = (e) => {
    this.setState({
      dates: e.target.value,
    });
  };

  handleUAC = (e) => {
    this.setState({
      UniversityAndCity: e.target.value,
    });
  };

  handleField = (e) => {
    this.setState({
      field: e.target.value,
    });
  };

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
    // const { dates, UniversityAndCity, field, education } = this.state;
    // const add = this.props.add(dates, UniversityAndCity, field, education);
    // if (add) {
    //   this.setState({
    //     text: "",
    //     checked: false,
    //     date: this.minDate,
    //   });
    // }
  };

  // handleAdding = () => {
  //   const { dates, UniversityAndCity, field } = this.state;
  // };
  render() {
    const { dates, UniversityAndCity, field, education } = this.state;

    return (
      <div id="Personal">
        {education.map((task) => {
          return (
            <div key={task.id}>
              <h2>{task.dates}</h2>
              <h2>{task.UniversityAndCity}</h2>
              <h2>{task.field}</h2>
            </div>
          );
        })}
        {/* <h2>{dates ? dates : "2011 - 2016"}</h2>
        <h2>
          {UniversityAndCity ? UniversityAndCity : "Politechnika Warszawska"}
        </h2>
        <h2>{field ? field : "elektrotechnika"}</h2> */}

        <div>
          <input
            type="text"
            placeholder="dodaj daty"
            name="dates"
            value={this.state.dates}
            onChange={this.handleDates}
          />
          <input
            type="text"
            placeholder="dodaj uczelnie i miasto"
            name="UniversityAndCity"
            value={this.state.UniversityAndCity}
            onChange={this.handleUAC}
          />
          <input
            type="text"
            placeholder="dodaj kierunek"
            name="field"
            value={this.state.field}
            onChange={this.handleField}
          />
          <br />
          <button onClick={this.handleClick}>Dodaj</button>
        </div>
        {/* <button onClick={this.handleClick} className="to-edit">
          edit
        </button>
        <form className="form" onSubmit={this.onSubmitTask}>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.dates}
              type="text"
              placeholder="Full name"
              name="dates"
            />
            <input
              onChange={this.handleChange}
              value={this.state.UniversityAndCity}
              type="text"
              placeholder="phone"
              name="UniversityAndCity"
            />
            <input
              onChange={this.handleChange}
              value={this.state.field}
              type="text"
              placeholder="phone"
              name="field"
            />
          </div>
          <button type="submit">submit</button>
        </form> */}
      </div>
    );
  }
}

export default Education;
