import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const PostForm = ({
  createPost,
  content,
  handlePostFormChange,
  postForm,
  editMode,
  closeEditMode
}) => (
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
        value={editMode ? "Editar" : "Publicar"}
      />
      {editMode === true && (
        <button className="btn btn-sm btn-danger" onClick={closeEditMode}>
          Cancelar
        </button>
      )}
    </div>
  </form>
);

PostForm.propTypes = {
  closeEditMode: PropTypes.func,
  content: PropTypes.string,
  editMode: PropTypes.bool,
  handlePostFormChange: PropTypes.func.isRequired
};

PostForm.defaultProps = {
  closeEditMode: () => "",
  content: "Qué esta pasando?",
  editMode: false
};

export default PostForm;
