import React from "react";

import PostForm from "../../components/PostForm";
import Post from "../../components/Post";

import styles from "./styles.less";

const View = ({
  posts,
  handlePostFormChange,
  createPost,
  postForm,
  deletePost,
  updatePost
}) => (
  <div className="row">
    <div className="col-12 col-sm-12 col-md-4 offset-md-4 col-lg-4 offset-lg-4">
      <h3 className={styles.title}>Mis posts</h3>
      <PostForm
        postForm={postForm}
        createPost={createPost}
        handlePostFormChange={handlePostFormChange}
      />
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          content={post.content}
          updatePost={updatePost}
          deletePost={deletePost}
          isPublic={post.isPublic}
          img={post.img}
        >
          {post.content}
        </Post>
      ))}
    </div>
  </div>
);

export default View;
