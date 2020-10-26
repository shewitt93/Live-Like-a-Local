import React, { Component } from "react";
import BlogPost from "../components/Blog/BlogPost";
import { getUser, getPosts } from "../Actions/actions";
import { connect } from "react-redux";
class Home extends Component {
  state = {
    blogPost: [],
  };
  componentDidMount() {
    this.props.getUser();
    this.props.getPosts();
  }

  render() {
    const Blog = this.props.user.blogPost.map((blog, index) => (
      <BlogPost key={index} blog={blog.blog} />
    ));
    return (
      <div className="wrapper">
        <div>{Blog}</div>
      </div>
    );
  }
}

const mSTP = (state) => ({ user: state });
export default connect(mSTP, { getUser, getPosts })(Home);