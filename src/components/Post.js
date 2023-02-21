import React, { useState } from "react";
// import "./Post.css";

const Post = ({ post}) => {
    const [countupVote,setCountUpVote] = useState(0);
    const [countdownVote,setCountDownVote] = useState(0);
    
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleUpvote = () => {
    setCountUpVote(countupVote +1);
    if (loggedInUser && countupVote%2 !== 0) {
      post.upVotes = 1
      post.downVotes = 0
    }else{
        post.upVotes = 0
    }
  };

  const handleDownvote = () => {
    setCountDownVote(countdownVote +1);
    if (loggedInUser && countdownVote%2 !== 0) {
        post.downVotes = 1
        post.upVotes = 0
    }else{
        post.downVotes = 0
    }
  };

  return (
    <div className="post-container">
      <div className="post-header">
        <span className="posted-by">{post.postedBy}</span>
        {/* <span className="published-at">{post.publishedAt}</span> */}
      </div>
      <div className="post-content">
        <div className="post-image">
          {post.image && <img src={post.image} alt="Posted by User" />}
        </div>
        <div className="post-text">{post.postText}</div>
      </div>
      <div className="post-footer">
        {loggedInUser ? (
          <>
            <button className="upvote-button" onClick={handleUpvote}>
              Upvote ({post.upVotes})
            </button>
            <button className="downvote-button" onClick={handleDownvote}>
              Downvote ({post.downVotes})
            </button>
          </>
        ) : (
            <>
            <button disabled>
              Upvote ({post.upVotes})
            </button>
            <button disabled>
              Downvote ({post.downVotes})
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
