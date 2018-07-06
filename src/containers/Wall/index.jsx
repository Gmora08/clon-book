import React, { Component } from "react";
import PropTypes from "prop-types";

import { database, storage } from "../../helpers/firebase";

import View from "./view";

export default class Wall extends Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      postForm: {
        content: "",
        isPublic: true,
        img: ""
      },
      isFetchingData: false,
      filter: true,
      postFormDisabled: false
    };
    this.createPost = this.createPost.bind(this);
    this.handlePostFormChange = this.handlePostFormChange.bind(this);
    this.cleanPostForm = this.cleanPostForm.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
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
    if (name === "isPublic") {
      value = value === "true" ? true : false;
    }
    this.setState(prevState => {
      prevState.postForm[name] = value;
      return { prevState };
    });
  }

  createPost(e) {
    e.preventDefault();
    if (!this.state.postFormDisabled) {
      const post = this.state.postForm;
      const key = database.ref("posts").push(post).key;
      post["id"] = key;
      const posts = this.state.posts;
      posts.push(post);
      this.setState({ posts }, this.cleanPostForm);
    }
    return true;
  }

  cleanPostForm() {
    const postForm = { content: "", isPublic: true, img: "" };
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
    const desicion = confirm("Estas seguro que deseas eliminar el post?");
    if (desicion) {
      const postRef = database.ref("posts").child(`${id}`);
      postRef.remove();
      const posts = this.state.posts.filter(post => post.id !== id);
      this.setState({ posts });
      return true;
    }
    return false;
  }

  handleUploadSuccess(filename) {
    this.setState({ postFormDisabled: true });
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState(prevState => {
          prevState.postForm.img = url;
          return { postForm: prevState.postForm, postFormDisabled: false };
        })
      );
  }

  changeFilter() {
    this.setState(prevState => ({ filter: !prevState.filter }));
  }

  render() {
    const filter = this.state.filter;
    const posts = this.state.posts.filter(post => post.isPublic === filter);

    return (
      <div>
        <View
          postFormDisabled={this.state.postFormDisabled}
          changeFilter={this.changeFilter}
          createPost={this.createPost}
          handlePostFormChange={this.handlePostFormChange}
          postForm={this.state.postForm}
          posts={posts}
          deletePost={this.deletePost}
          updatePost={this.updatePost}
          handleUploadSuccess={this.handleUploadSuccess}
        />
      </div>
    );
  }
}
