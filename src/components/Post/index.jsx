import React, { Component } from "react";
import PropTypes from "prop-types";
import { storage } from "../../helpers/firebase";

import PostForm from "../PostForm";

import styles from "./styles.less";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      postFormDisabled: false,
      postForm: {
        content: props.content,
        id: props.id,
        img: props.img,
        isPublic: props.isPublic
      }
    };
    this.handlePostFormChange = this.handlePostFormChange.bind(this);
    this.setEditMode = this.setEditMode.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
  }

  setEditMode(e) {
    e.preventDefault();
    this.setState(prevState => ({ editMode: !prevState.editMode }));
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

  handleUploadSuccess(filename) {
    this.setState({ postFormDisabled: true });
    storage
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url =>
        this.setState(prevState => {
          console.log(prevState.postForm.img);
          prevState.postForm.img = url;
          console.log(prevState.postForm.img);
          console.log(prevState.postForm);
          return { postForm: prevState.postForm, postFormDisabled: false };
        })
      );
  }

  updatePost(e) {
    e.preventDefault();
    if (!this.state.postFormDisabled) {
      this.props.updatePost(this.props.id, this.state.postForm);
      this.setState({ editMode: false });
    }
    return true;
  }

  render() {
    const { id, children, img, updatePost, deletePost } = this.props;

    if (this.state.editMode) {
      return (
        <PostForm
          disabled={this.state.postFormDisabled}
          closeEditMode={this.setEditMode}
          editMode
          postForm={this.state.postForm}
          createPost={this.updatePost}
          handlePostFormChange={this.handlePostFormChange}
          handleUploadSuccess={this.handleUploadSuccess}
        />
      );
    }
    return (
      <div className={styles.post}>
        {img.length > 0 && <img className={styles.img} src={img} alt={img} />}
        <p className={styles.content}>{children}</p>
        <div className={styles.action}>
          <button className={styles.postAction} onClick={this.setEditMode}>
            Editar
          </button>
          <button className={styles.postAction} onClick={() => deletePost(id)}>
            Eliminar
          </button>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired,
  updatePost: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};
