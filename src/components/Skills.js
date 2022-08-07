import React, { Component } from "react";
import uniqid from "uniqid";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      skill: "",
      skills: [
        { id: uniqid(), skill: "SQL" },
        { id: uniqid(), skill: "Typescript" },
        { id: uniqid(), skill: "React" },
        { id: uniqid(), skill: "JavaScript" },
        { id: uniqid(), skill: "HTML5" },
        { id: uniqid(), skill: "CSS3" },
        { id: uniqid(), skill: "Git" },
        { id: uniqid(), skill: "Sass" },
        { id: uniqid(), skill: "Bootstrap" },
        { id: uniqid(), skill: "jQuery" },
        { id: uniqid(), skill: "BEM" },
        { id: uniqid(), skill: "SCSS" },
        { id: uniqid(), skill: "Testy integracyjne i jednostkowe" },
        { id: uniqid(), skill: "WCAG" },
        { id: uniqid(), skill: "Jest" },
        { id: uniqid(), skill: "Webpack" },
      ],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // z tym nie wywala bledu
  }
  handleChange(event) {
    this.setState({
      // Computed property names
      // keys of the objects are computed dynamically
      [event.target.name]: event.target.value,
    });
  }
  handleClick() {
    // e.currentTarget.nextElementSibling.classList.add("visible");
    console.log("dziala");
    const { skill, skills } = this.state;
    const skillNew = {
      id: uniqid(),
      skill: "",
    };
    this.setState((prevState) => ({
      skill: "",
      skills: [...prevState.skills, skillNew],
    }));
  }
  handleAdd(e) {
    // e.currentTarget.nextElementSibling.classList.add("visible");
  }
  render() {
    const { skill, skills } = this.state;
    return (
      <div id="Skills">
        <p>Umiejętności: </p>
        <ul className="skills">
          {skills.map((skil) => {
            return <li key={skil.id}>{skil.skill}</li>;
          })}
        </ul>
        <button onClick={this.handleAdd} className="adding">
          Dodaj
        </button>
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
          <button onClick={this.handleClick}>Dodajj</button>
        </div>
      </div>
    );
  }
}

export default Skills;
