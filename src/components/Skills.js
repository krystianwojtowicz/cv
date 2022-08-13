import React, { useState } from "react";
import uniqid from "uniqid";

function Skills() {
  const initialState = [
    { id: uniqid(), name: "SQL" },
    { id: uniqid(), name: "Typescript" },
    { id: uniqid(), name: "React" },
    { id: uniqid(), name: "JavaScript" },
    { id: uniqid(), name: "HTML5" },
    { id: uniqid(), name: "CSS3" },
    { id: uniqid(), name: "Git" },
    { id: uniqid(), name: "Sass" },
    { id: uniqid(), name: "Bootstrap" },
    { id: uniqid(), name: "jQuery" },
    { id: uniqid(), name: "BEM" },
    { id: uniqid(), name: "Testy integracyjne i jednostkowe" },
    { id: uniqid(), name: "WCAG" },
    { id: uniqid(), name: "Jest" },
    { id: uniqid(), name: "Webpack" },
  ];

  const [skills, setSkills] = useState(initialState);
  const [newSkill, setNewSkill] = useState("");

  const add = (skill) => setSkills([...skills, skill]);

  const handleClick = (e) => {
    e.currentTarget.parentElement.classList.remove("visible");
    add({ name: newSkill, id: uniqid() });
    setNewSkill("");
  };

  const handleAdd = (e) => {
    e.currentTarget.nextElementSibling.classList.add("visible");
  };

  return (
    <div id="Skills">
      <p>Umiejętności: </p>
      <ul className="skills">
        {skills.map((skill, index) => {
          return <Skill key={skill.id} skill={skill} />;
        })}
      </ul>
      <button onClick={handleAdd} className="adding-skills">
        Dodaj
      </button>
      <div className="add-skills">
        <div>
          <input
            onChange={(event) => setNewSkill(event.target.value)}
            value={newSkill}
            type="text"
            placeholder="add skill"
            name="skill"
          />
        </div>
        <button onClick={handleClick}>Dodaj</button>
      </div>
    </div>
  );
}

function Skill({ skill }) {
  return (
    <li className="skill">
      <span>{skill.name}</span>
    </li>
  );
}

export default Skills;
