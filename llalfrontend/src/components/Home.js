import React, { Component } from "react";

class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="wrapper">
        <h4>What would you like to do today?</h4>
      </div>
    );
  }
}

export default Home;