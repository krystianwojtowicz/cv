import React, { Component } from "react";
import img from "./Krystian.jpg";

class Personal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      phone: "",
      email: "",
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
    const { fullName, phone, email } = this.state;
    return (
      <div id="Personal">
        <h2>{fullName ? fullName : "Krystian Wójtowicz"}</h2>
        <img src={img || null} alt="" />
        {/* <img src="components/Krystian.jpg" alt="" /> */}
        <label htmlFor="phone">Telefon</label>
        <h2>{phone ? phone : "789194734"}</h2>
        <label htmlFor="email">E-mail</label>
        <h3>{email ? email : "krystian1wojtowicz@gmail.com"}</h3>
        <button onClick={this.handleClick} className="to-edit">
          edit
        </button>
        <form className="form" onSubmit={this.onSubmitTask}>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.fullName}
              type="text"
              placeholder="Full name"
              name="fullName"
            />
            <input
              onChange={this.handleChange}
              value={this.state.phone}
              type="text"
              placeholder="phone"
              name="phone"
            />
            <input
              onChange={this.handleChange}
              value={this.state.email}
              type="text"
              placeholder="email"
              name="email"
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Personal;
