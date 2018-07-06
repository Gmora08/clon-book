import React, { Component } from "react";
import PropTypes from "prop-types";

import { database } from "../../helpers/firebase";

import View from "./view";

export default class Wall extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postForm: {
        content: "",
        isPublic: false,
        img: ""
      },
      isFetchingData: false
    };
    this.createPost = this.createPost.bind(this);
    this.handlePostFormChange = this.handlePostFormChange.bind(this);
    this.cleanPostForm = this.cleanPostForm.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  componentDidMount() {
    database
      .ref("posts")
      .once("value")
      .then(snapshot => {
        const postObject = snapshot.val();
        const posts = Object.keys(postObject).map(key => {
          const post = postObject[key];
          post["id"] = key;
          return post;
        });
        this.setState({ posts });
      })
      .catch(err => console.warn(err));
  }

  handlePostFormChange({ target: { name, value } }) {
    this.setState(prevState => {
      prevState.postForm[name] = value;
      return { prevState };
    });
  }

  createPost(e) {
    e.preventDefault();
    database.ref("posts").push(this.state.postForm);
    const posts = this.state.posts;
    posts.push(this.state.postForm);
    this.setState({ posts }, this.cleanPostForm);
  }

  cleanPostForm() {
    const postForm = { content: "", isPublic: false, img: "" };
    this.setState({ postForm });
  }

  updatePost(id, data) {
    const posts = this.state.posts.map(
      post => (post.id === id ? { ...data } : post)
    );
    const postRef = database.ref("posts").child(`${id}`);
    postRef.update(data);
    this.setState({ posts });
  }

  deletePost(id) {
    const postRef = database.ref("posts").child(`${id}`);
    postRef.remove();
    const posts = this.state.posts.filter(post => post.id !== id);
    this.setState({ posts });
  }

  render() {
    return (
      <div>
        <View
          createPost={this.createPost}
          handlePostFormChange={this.handlePostFormChange}
          postForm={this.state.postForm}
          posts={this.state.posts}
          deletePost={this.deletePost}
          updatePost={this.updatePost}
        />
      </div>
    );
  }
}
