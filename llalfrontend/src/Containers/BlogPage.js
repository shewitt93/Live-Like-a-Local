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
    console.log(this.props.user);
    const Blog = this.props.user.blogPost.map((blog, index) => (
      <BlogPost
        key={index}
        title={blog.title}
        image={blog.imgSrc}
        description={blog.description}
        username={blog.username}
        likes={blog.likes}
        id={blog.id}
      />
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
