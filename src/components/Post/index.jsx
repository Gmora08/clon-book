import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.less";

const Post = ({ id, children, img, editAction, deletePost }) => (
  <div className={styles.post}>
    <p className={styles.content}>{children}</p>
    <div className={styles.action}>
      <button className={styles.postAction}>Editar</button>
      <button className={styles.postAction} onClick={() => deletePost(id)}>
        Eliminar
      </button>
    </div>
  </div>
);

Post.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  img: PropTypes.string.isRequired,
  editAction: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default Post;
