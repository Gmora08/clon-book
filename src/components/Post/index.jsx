import React, { Component } from "react";
import PropTypes from "prop-types";

import PostForm from "../PostForm";

import styles from "./styles.less";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      postForm: {
        content: props.content,
        id: props.id,
        img: "",
        isPublic: props.isPublic
      }
    };
    this.handlePostFormChange = this.handlePostFormChange.bind(this);
    this.setEditMode = this.setEditMode.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  setEditMode(e) {
    e.preventDefault();
    this.setState(prevState => ({ editMode: !prevState.editMode }));
  }

  handlePostFormChange({ target: { name, value } }) {
    this.setState(prevState => {
      prevState.postForm[name] = value;
      return { prevState };
    });
  }

  updatePost(e) {
    e.preventDefault();
    this.props.updatePost(this.props.id, this.state.postForm);
    this.setState({ editMode: false });
  }

  render() {
    const { id, children, img, updatePost, deletePost } = this.props;

    if (this.state.editMode) {
      return (
        <PostForm
          closeEditMode={this.setEditMode}
          editMode
          postForm={this.state.postForm}
          createPost={this.updatePost}
          handlePostFormChange={this.handlePostFormChange}
        />
      );
    }
    return (
      <div className={styles.post}>
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
