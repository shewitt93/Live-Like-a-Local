

import React, { Component } from "react";

class Home extends Component {
    state = {
      username: "null",
      Latitude: "",
      Longitude: "",
      location: "",
      language: "",
    };

https://api.opentripmap.com/0.1/en/places/radius?radius=10000&lon=2.3522&lat=48.8566&src_geom=wikidata&src_attr=wikidata&rate=3h&format=json&limit=500&apikey=5ae2e3f221c38a28845f05b67481982295146f2200f63a7a6a6b8847