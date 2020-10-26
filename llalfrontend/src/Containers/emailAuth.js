import React, { Component } from "react";

export default class emailAuth extends Component {
  state = { email: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    let userData = this.state.email;
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    fetch("http://localhost:8000/models/password_reset/", options)
      .then((r) => r.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="registrationForm">
            <h3>Forgotten Password</h3>
            <form onSubmit={this.handleFormSubmit}>
              <br />
              <input
                className="formInput"
                required
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={this.handleInput}
              />

              <input
                className="registerButton"
                type="submit"
                value="Create Account"
              />
            </form>
          </div>
        </div>
      </>
    );
  }
}
