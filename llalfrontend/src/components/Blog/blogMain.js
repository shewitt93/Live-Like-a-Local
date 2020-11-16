import React, { Component } from "react";
import { getUser, getPosts } from "../../Actions/actions";
import { connect } from "react-redux";

class blogMain extends Component {
  blogId = this.props.match.params.id;
  state = {};

  componentDidMount() {
    this.props.getUser();
    this.props.getPosts();
  }
  render() {
    return <p>hi</p>;
  }
}
const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUser, getPosts })(blogMain);
