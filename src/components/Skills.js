import React, { Component } from "react";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: "",
      skills: [
        "SQL",
        "Typescript",
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
        "Sass",
        "Bootstrap",
        "jQuery",
        "BEM",
        "SCSS",
        "Testy integracyjne i jednostkowe",
        "WCAG",
        "Jest",
        "Webpack",
      ],
    };
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
    const { skill, skills } = this.state;
    return (
      <div id="Skills">
        <p>Umiejętności: </p>

        <div className="add-skills">
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.skill}
              type="text"
              placeholder="add skill"
              name="skill"
            />
          </div>
          <button type="submit">Dodaj</button>
        </div>
      </div>
    );
  }
}

export default Skills;
