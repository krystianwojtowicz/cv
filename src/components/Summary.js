// import React, { Component } from "react";
// import uniqid from "uniqid";
// import Skills from "./Skills";

// class Summary extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       id: uniqid(),
//       linkToRepository: "",
//       linkToWebsite: "",
//       technologies: "",
//       description: "",
//       summary: [
//         {
//           id: uniqid(),
//           linkToRepository: "https://github.com/krystianwojtowicz/blog-api",
//           linkToWebsite: "https://blog-api-nwqo.onrender.com/",
//           technologies: "CSS, React, Express, MongoDB, Node.js",
//           description:
//             "MERN, pozwala na tworzenie, edytowanie i usuwanie postów",
//         },
//         {
//           id: uniqid(),
//           linkToRepository:
//             "https://github.com/krystianwojtowicz/typescript-fetch",
//           linkToWebsite:
//             "https://krystianwojtowicz.github.io/typescript-fetch/",
//           technologies: "CSS, React, TypeScript",
//           description:
//             "Strona z pobieraniem danych z API, treść zadania można zobaczyć na githubie",
//         },
//         {
//           id: uniqid(),
//           linkToRepository: "https://github.com/krystianwojtowicz/cv",
//           linkToWebsite: "https://krystianwojtowicz.github.io/cv/",
//           technologies: "React, HTML, JS, CSS",
//           description:
//             "Strona, w której tworzę elementy dynamicznie, dzięki niej mogę szybko edytować CV",
//         },
//         {
//           id: uniqid(),
//           linkToRepository: "https://github.com/krystianwojtowicz/todo",
//           linkToWebsite: "https://krystianwojtowicz.github.io/todo/",
//           technologies: "HTML, JS, CSS",
//           description:
//             "Strona, w której tworzę elementy dynamicznie, dokłada zadania to wielowymiarowej tablicy projektów, strona z wykorzystaniem localStorage",
//         },
//         {
//           id: uniqid(),
//           linkToRepository:
//             "https://github.com/krystianwojtowicz/shopping-cart_react",
//           linkToWebsite:
//             "https://krystianwojtowicz.github.io/shopping-cart_react/",
//           technologies: "HTML, JS, CSS, React",
//           description: "Sklep w react",
//         },
//         {
//           id: uniqid(),
//           linkToRepository:
//             "https://github.com/krystianwojtowicz/website-with-bem-and-scss",
//           linkToWebsite:
//             "https://krystianwojtowicz.github.io/website-with-bem-and-scss/",
//           technologies: "HTML, JS, CSS",
//           description: "Strona z wykorzystaniem BEM, SCSS",
//         },
//       ],
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({
//       // Computed property names
//       // keys of the objects are computed dynamically
//       [event.target.name]: event.target.value,
//     });
//   }

//   handleClick = (e) => {
//     e.currentTarget.parentElement.classList.remove("visible");
//     const {
//       linkToRepository,
//       linkToWebsite,
//       description,
//       technologies,
//       summary,
//     } = this.state;
//     const summaryNew = {
//       id: uniqid(),
//       linkToRepository,
//       linkToWebsite,
//       description,
//       technologies,
//     };
//     this.setState((prevState) => ({
//       linkToRepository: "",
//       linkToWebsite: "",
//       technologies: "",
//       description: "",
//       summary: [...prevState.summary, summaryNew],
//     }));
//   };

//   handleAdd(e) {
//     e.currentTarget.nextElementSibling.classList.add("visible");
//   }

//   render() {
//     const {
//       inkToRepository,
//       linkToWebsite,
//       description,
//       technologies,
//       summary,
//     } = this.state;
//     return (
//       <div id="Summary">
//         <div id="summary-inner">
//           <h3>Podsumowanie</h3>
//           <hr />
//           <p className="examples">Przykładowe, zrealizowane projekty:</p>
//           <div className="summary">
//             {summary.map((summ) => {
//               return (
//                 <div key={summ.id}>
//                   <label>Link do repozyzorium:</label>
//                   <a href={summ.linkToRepository}>{summ.linkToRepository}</a>
//                   <br />
//                   <label>Link do strony:</label>
//                   <a href={summ.linkToWebsite}>{summ.linkToWebsite}</a>
//                   <br />
//                   <label>Technologie: </label>
//                   <p>{summ.technologies}</p>
//                   <br />
//                   <label>Opis: </label>
//                   <p>{summ.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//           <p className="github">
//             GitHub:
//             <a href="https://github.com/krystianwojtowicz">
//               https://github.com/krystianwojtowicz
//             </a>
//           </p>
//           <button onClick={this.handleAdd} className="adding">
//             Add
//           </button>
//           <div className="add-summary">
//             <input
//               onChange={this.handleChange}
//               value={this.state.linkToRepository}
//               type="text"
//               placeholder="link To Repository"
//               name="linkToRepository"
//             />
//             <input
//               onChange={this.handleChange}
//               value={this.state.linkToWebsite}
//               type="text"
//               placeholder="link To Website"
//               name="linkToWebsite"
//             />
//             <input
//               onChange={this.handleChange}
//               value={this.state.technologies}
//               type="text"
//               placeholder="technologies"
//               name="technologies"
//             />
//             <input
//               onChange={this.handleChange}
//               value={this.state.description}
//               type="text"
//               placeholder="description"
//               name="description"
//             />
//             <button onClick={this.handleClick}>Add</button>
//           </div>
//         </div>
//         <Skills></Skills>
//       </div>
//     );
//   }
// }

// export default Summary;

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
          linkToRepository: "https://github.com/krystianwojtowicz/blog-api",
          linkToWebsite: "https://blog-api-nwqo.onrender.com/",
          technologies: "CSS, React, Express, MongoDB, Node.js",
          description: "MERN, it allows create, edit and delete blog posts",
        },
        {
          id: uniqid(),
          linkToRepository:
            "https://github.com/krystianwojtowicz/typescript-fetch",
          linkToWebsite:
            "https://krystianwojtowicz.github.io/typescript-fetch/",
          technologies: "CSS, React, TypeScript",
          description:
            "Page with fetching data from the API, the content of the task can be seen on github",
        },
        {
          id: uniqid(),
          linkToRepository: "https://github.com/krystianwojtowicz/cv",
          linkToWebsite: "https://krystianwojtowicz.github.io/cv/",
          technologies: "React, HTML, JS, CSS",
          description:
            "A webpage, where I create elements dynamically, thanks to which I can quickly edit my CV.",
        },
        {
          id: uniqid(),
          linkToRepository: "https://github.com/krystianwojtowicz/todo",
          linkToWebsite: "https://krystianwojtowicz.github.io/todo/",
          technologies: " HTML, JS, CSS",
          description:
            "A webpage in which I create elements dynamically, adds tasks to a multidimensional array of projects, webpage using localStorage.",
        },
        {
          id: uniqid(),
          linkToRepository:
            "https://github.com/krystianwojtowicz/shopping-cart_react",
          linkToWebsite:
            "https://krystianwojtowicz.github.io/shopping-cart_react/",
          technologies: " HTML, JS, CSS, React",
          description: "Shop in react",
        },
        {
          id: uniqid(),
          linkToRepository:
            "https://github.com/krystianwojtowicz/website-with-bem-and-scss",
          linkToWebsite:
            "https://krystianwojtowicz.github.io/website-with-bem-and-scss/",
          technologies: " HTML, JS, CSS",
          description: "A webpage with the use of BEM, SCSS",
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
          <h3>Summary</h3>
          <hr />
          <p className="examples">Examples of completed projects:</p>
          <div className="summary">
            {summary.map((summ) => {
              return (
                <div key={summ.id}>
                  <label>Link to repository: </label>
                  <a href={summ.linkToRepository}>{summ.linkToRepository}</a>
                  <br />
                  <label>Link to the website: </label>
                  <a href={summ.linkToWebsite}>{summ.linkToWebsite}</a>
                  <br />
                  <label>Technologies: </label>
                  <p>{summ.technologies}</p>
                  <br />
                  <label>Description: </label>
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
