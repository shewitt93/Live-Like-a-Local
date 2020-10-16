import React, { Component } from "react";
// import LocationMap from "./LocationMap";

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
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
    fetch(
      "https://api.sygictraveldata.com/1.0/en/places/list?bounds=51.50674581976235,-0.1306557655334473,51.5087791854578,-0.12452423572540285&level=poi&limit=512",
      {}
    );
  }

  render() {
    return (
      <div className="wrapper">
        <h4>What would you like to do today {this.state.username}?</h4>
        {/* <LocationMap /> */}
      </div>
    );
  }
}

export default Home;
