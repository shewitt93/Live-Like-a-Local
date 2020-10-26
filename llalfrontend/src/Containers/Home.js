import React, { Component } from "react";
import SearchBar from "../components/SearchBar";
import {
  getUser,
  getPosts,
  setGeoLocation,
  fetchLocation,
} from "../Actions/actions";
import { connect } from "react-redux";

class Home extends Component {
  componentDidMount() {
    this.props.getUser();
    this.props.getPosts();
    // this.props.fetchLocation(51.5074, -0.1278);

    navigator.geolocation.getCurrentPosition((position) => {
      this.props.setGeoLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    if (
      this.props.geoLocation.lat !== nextProps.geoLocation.lat ||
      this.props.geoLocation.location !== nextProps.geoLocation.location ||
      this.props.userData.username !== nextProps.userData.username
    ) {
      const { lat, lng, location } = nextProps.geoLocation;
      this.props.fetchLocation(lat, lng, location);

      return true;
    } else return false;
  }

  render() {
    const { userData } = this.props;
    const { location } = this.props.geoLocation;

    return (
      <div className="wrapper">
        <div>
          <h1>LIVE LIKE A LOCAL</h1>
        </div>
        <div>
          <p>current location is {location}</p>
        </div>
        <h4>What would you like to do today {userData.username}?</h4>

        <div>
          <SearchBar />
        </div>
      </div>
    );
  }
}

const mSTP = (state) => state;

export default connect(mSTP, {
  getUser,
  getPosts,
  setGeoLocation,
  fetchLocation,
})(Home);
