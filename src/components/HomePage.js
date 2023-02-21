import React, { useState, useEffect } from "react";
// import "./HomePage.css";
import Post from "./Post.js";
import NewPost from "./NewPost";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  // const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  const handleAddPost = (updatedPosts) => {
    setPosts(updatedPosts);
  };

  return (
    <div className="home-page-container">
      <h1>Recent posts</h1>
      <NewPost onAddPost={handleAddPost} />
      {posts.map((post) => (
        <Post key={post.publishedAt} post={post} />
      ))}
       
    </div>
  );
};

export default HomePage;