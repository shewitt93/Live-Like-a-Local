import React, { Component } from "react";

export default class Settings extends Component {
  state = { oldpassword: "", newpassword: "", newpasswordTwo: "" };

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    let userData;
    e.preventDefault();
    if (this.state.newpassword === this.state.newpasswordTwo) {
      userData = {
        old_password: this.state.oldpassword,
        new_password: this.state.newpassword,
      };
      const options = {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(userData),
      };

      fetch("http://localhost:8000/models/change-password/", options)
        .then((r) => r.json())
        .then((data) => console.log(data));
    }
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <div className="registrationForm">
            <h3>Register</h3>
            <form onSubmit={this.handleFormSubmit}>
              <br />
              <input
                className="formInput"
                required
                type="password"
                name="oldpassword"
                placeholder="Old password"
                value={this.state.oldpassword}
                onChange={this.handleInput}
              />
              <br />
              <input
                className="formInput"
                required
                type="password"
                name="newpassword"
                minLength="6"
                placeholder="Password Minimum of 6 characters"
                value={this.state.newpassword}
                onChange={this.handleInput}
              />
              <br />
              <input
                className="formInput"
                required
                type="password"
                name="newpasswordTwo"
                minLength="6"
                placeholder="Re-enter Password"
                value={this.state.newpasswordTwo}
                onChange={this.handleInput}
              />
              <br />
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
