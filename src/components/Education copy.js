import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phone: "",
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
  onSubmitTask(e) {
    e.preventDefault();
    e.currentTarget.classList.remove("visible");
  }
  handleClick(e) {
    e.currentTarget.nextElementSibling.classList.add("visible");
  }
  render() {
    let { dates, UniversityAndCity, field } = this.state;
    return (
      <div id="Personal">
        <h2>{dates ? dates : "2011 - 2016"}</h2>
        <h2>
          {UniversityAndCity ? UniversityAndCity : "Politechnika Warszawska"}
        </h2>
        <h2>{field ? field : "elektrotechnika"}</h2>
        <button onClick={this.handleClick} className="to-edit">
          edit
        </button>
        <form className="form" onSubmit={this.onSubmitTask}>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.dates}
              type="text"
              placeholder="Full name"
              name="fullName"
            />
            <input
              onChange={this.handleChange}
              value={this.state.UniversityAndCity}
              type="text"
              placeholder="phone"
              name="phone"
            />
            <input
              onChange={this.handleChange}
              value={this.state.field}
              type="text"
              placeholder="phone"
              name="phone"
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Education;
