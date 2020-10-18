import React, { Component } from "react";

class Home extends Component {
  state = {
    username: "null",
    Latitude: "",
    Longitude: "",
    location: "",
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
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      this.setState({
        Latitude: position.coords.latitude,
        Longitude: position.coords.longitude,
      });
      const options = {
        method: "GET",
      };

      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.Latitude},${this.state.Longitude}&result_type=country|locality&key=${process.env.REACT_APP_google_key}`,
        options
      )
        .then((r) => r.json())
        .then((data) =>
          this.setState({ location: data.results[0].formatted_address })
        );
    });
  }
  setLocation = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleLocationSubmit = (e) => {
    e.preventDefault();
    // this.setState({location})
  };

  render() {
    return (
      <div className="wrapper">
        <div>
          <h1>LIVE LIKE A LOCAL</h1>
        </div>
        <div>
          <p>current location is {this.state.location}</p>
        </div>
        <h4>What would you like to do today {this.state.username}?</h4>
        <form onSubmit={this.handleLocationSubmit}>
          <input
            className="locationInput"
            type="text"
            name="location"
            onChange={this.setLocation}
          />
          <input type="submit" value="Location" />
        </form>
      </div>
    );
  }
}

export default Home;
