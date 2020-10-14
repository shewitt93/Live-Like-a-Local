import React, { Component } from "react";

class Home extends Component {
  state = {
    username: "null",
  };
  componentDidMount() {
    fetch("http://localhost:8000/models/current_user/", {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ username: json.username });
      });
  }

  render() {
    return (
      <div className="wrapper">
        <h4>What would you like to do today {this.state.username}?</h4>
      </div>
    );
  }
}

export default Home;
