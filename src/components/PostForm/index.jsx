import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const PostForm = ({ createPost, content, handlePostFormChange, postForm }) => (
  <form className={styles.postForm} onSubmit={createPost}>
    <input
      className={styles.content}
      name="content"
      id="content"
      rows="3"
      placeholder={content}
      onChange={handlePostFormChange}
      value={postForm.content}
    />
    <div className={styles.actions}>
      <select
        name="isPublic"
        id="isPublic"
        className={styles.select}
        onChange={handlePostFormChange}
      >
        <option value={true}>Publico</option>
        <option value={false}>Amigos</option>
      </select>
      <input
        className="btn btn-sm btn-primary"
        type="submit"
        value="Publicar"
      />
    </div>
  </form>
);

PostForm.propTypes = {
  content: PropTypes.string,
  handlePostFormChange: PropTypes.func.isRequired
};

PostForm.defaultProps = {
  content: "Qué esta pasando?"
};

export default PostForm;
