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
        },
        {
          id: uniqid(),
          linkToRepository: "https://github.com/krystianwojtowicz/todo",
          linkToWebsite: "https://krystianwojtowicz.github.io/todo/",
          technologies: "html, js, css",
          description:
            "Strona, w której tworzę elementy dynamicznie, dokłada zadania to wielowymiarowej tablicy projektów, strona z wykorzystaniem localStorage",
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
        },
        {
          id: uniqid(),
          linkToRepository:
            "https://github.com/krystianwojtowicz/website-with-bem-and-scss",
          linkToWebsite:
            "https://krystianwojtowicz.github.io/website-with-bem-and-scss/",
          technologies: "html, js, css",
          description: "Strona z wykorzystaniem BEM i SCSS",
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
          <h4>Podsumowanie</h4>
          <hr />
          <p className="examples">Przykładowe, zrealizowane projekty</p>
          <div className="summary">
            {summary.map((summ) => {
              return (
                <div key={summ.id}>
                  <label>Link do repozyzorium: </label>
                  <a href={summ.linkToRepository}>{summ.linkToRepository}</a>
                  <br />
                  <label>Link do strony: </label>
                  <a href={summ.linkToWebsite}>{summ.linkToWebsite}</a>
                  <br />
                  <label>Technologie: </label>
                  <p>{summ.technologies}</p>
                  <br />
                  <label>Opis: </label>
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
            Dodaj
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
            <button onClick={this.handleClick}>Dodaj</button>
          </div>
        </div>
        <Skills></Skills>
      </div>
    );
  }
}

export default Summary;
