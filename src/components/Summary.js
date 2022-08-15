import React, { Component } from "react";
import uniqid from "uniqid";
import Skills from "./Skills";

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqid(),
      linkToRepository: "",
      linkToWebsite: "",
      technologies: "",
      description: "",
      summary: [
        {
          id: uniqid(),
          linkToRepository: "https://github.com/krystianwojtowicz/cv",
          linkToWebsite: "https://krystianwojtowicz.github.io/cv/",
          technologies: "react, html, js, css",
          description:
            "Strona, w której tworzę elementy dynamicznie, dzięki niej mogę szybko edytować CV",
          // "A webpage, where I create elements dynamically, thanks to which I can quickly edit my CV.",
        },
        {
          id: uniqid(),
          linkToRepository: "https://github.com/krystianwojtowicz/todo",
          linkToWebsite: "https://krystianwojtowicz.github.io/todo/",
          technologies: "html, js, css",
          description:
            "Strona, w której tworzę elementy dynamicznie, dokłada zadania to wielowymiarowej tablicy projektów, strona z wykorzystaniem localStorage",
          // "A webpage in which I create elements dynamically, adds tasks to a multidimensional array of projects, webpage using localStorage.",
        },
        {
          id: uniqid(),
          linkToRepository:
            "https://github.com/krystianwojtowicz/frontend-recruitment-task",
          linkToWebsite:
            "https://krystianwojtowicz.github.io/frontend-recruitment-task/",
          technologies: "html, js, css-grid, WCAG",
          description:
            "Treść zadania jest dołączona do readme, w tym zadaniu wykorzystałem grid, jest to strona spełniająca WCAG.",
          // "The task content is attached to the readme, in this webpage I used a grid, it is a WCAG compliant webpage.",
        },
        {
          id: uniqid(),
          linkToRepository:
            "https://github.com/krystianwojtowicz/website-with-bem-and-scss",
          linkToWebsite:
            "https://krystianwojtowicz.github.io/website-with-bem-and-scss/",
          technologies: "html, js, css",
          description: "Strona z wykorzystaniem BEM i SCSS",
          // "A webpage with the use of BEM and SCSS",
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
    const {
      linkToRepository,
      linkToWebsite,
      description,
      technologies,
      summary,
    } = this.state;
    const summaryNew = {
      id: uniqid(),
      linkToRepository,
      linkToWebsite,
      description,
      technologies,
    };
    this.setState((prevState) => ({
      linkToRepository: "",
      linkToWebsite: "",
      technologies: "",
      description: "",
      summary: [...prevState.summary, summaryNew],
    }));
  };

  handleAdd(e) {
    e.currentTarget.nextElementSibling.classList.add("visible");
  }

  render() {
    const {
      inkToRepository,
      linkToWebsite,
      description,
      technologies,
      summary,
    } = this.state;
    return (
      <div id="Summary">
        <div id="summary-inner">
          <h3>
            Podsumowanie
            {/* Summary */}
          </h3>
          <hr />
          <p className="examples">
            Przykładowe, zrealizowane projekty:
            {/* Examples of completed projects: */}
          </p>
          <div className="summary">
            {summary.map((summ) => {
              return (
                <div key={summ.id}>
                  <label>
                    Link do repozyzorium: {/* Link to repository:{" "} */}
                  </label>
                  <a href={summ.linkToRepository}>{summ.linkToRepository}</a>
                  <br />
                  <label>
                    Link do strony: {/* Link to the website:{" "} */}
                  </label>
                  <a href={summ.linkToWebsite}>{summ.linkToWebsite}</a>
                  <br />
                  <label>Technologie: {/* Technologies:{" "} */}</label>
                  <p>{summ.technologies}</p>
                  <br />
                  <label>Opis: {/* Description:{" "} */}</label>
                  <p>{summ.description}</p>
                </div>
              );
            })}
          </div>
          <p className="github">
            GitHub:
            <a href="https://github.com/krystianwojtowicz">
              https://github.com/krystianwojtowicz
            </a>
          </p>
          <button onClick={this.handleAdd} className="adding">
            Add
          </button>
          <div className="add-summary">
            <input
              onChange={this.handleChange}
              value={this.state.linkToRepository}
              type="text"
              placeholder="link To Repository"
              name="linkToRepository"
            />
            <input
              onChange={this.handleChange}
              value={this.state.linkToWebsite}
              type="text"
              placeholder="link To Website"
              name="linkToWebsite"
            />
            <input
              onChange={this.handleChange}
              value={this.state.technologies}
              type="text"
              placeholder="technologies"
              name="technologies"
            />
            <input
              onChange={this.handleChange}
              value={this.state.description}
              type="text"
              placeholder="description"
              name="description"
            />
            <button onClick={this.handleClick}>Add</button>
          </div>
        </div>
        <Skills></Skills>
      </div>
    );
  }
}

export default Summary;
