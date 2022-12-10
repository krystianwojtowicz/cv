import React, { useState } from "react";
import img from "./Krystian.jpg";

function Personal() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");

  const onSubmitTask = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove("visible");
  };

  const handleClick = (e) => {
    e.currentTarget.nextElementSibling.classList.add("visible");
  };

  return (
    <div id="Personal">
      <h2>{fullName ? fullName : "Krystian Wójtowicz"}</h2>
      <img src={img} alt="" />
      <label htmlFor="phone">
        Contact phone
        {/* Telefon */}
      </label>
      <h2>{phone ? phone : "789194734"}</h2>
      <label htmlFor="email">E-mail</label>
      <h4>{email ? email : "krystian1wojtowicz@gmail.com"}</h4>
      <label htmlFor="linkedin">Linkedin</label>
      <a
        className="linkedin"
        href={
          linkedin
            ? linkedin
            : "https://www.linkedin.com/in/krystian-wojtowicz/"
        }
      >
        {linkedin
          ? linkedin
          : "https://www.linkedin.com/in/krystian-wojtowicz/"}
      </a>
      <button onClick={handleClick} className="to-edit">
        edit
      </button>
      <form className="form" onSubmit={onSubmitTask}>
        <div>
          <input
            onChange={(e) => {
              setFullName(e.target.value);
            }}
            value={fullName}
            type="text"
            placeholder="Full name"
            name="fullName"
          />
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            type="text"
            placeholder="phone"
            name="phone"
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="text"
            placeholder="email"
            name="email"
          />
          <input
            onChange={(e) => {
              setLinkedin(e.target.value);
            }}
            value={linkedin}
            type="text"
            placeholder="linkedin"
            name="linkedin"
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default Personal;
