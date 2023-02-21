import React, { useState } from "react";
// import "./NewPost.css";

const NewPost = ({ onAddPost }) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const [postedBy, setPostedBy] = useState("");
    const [postText, setPostText] = useState("");
    const [image, setImage] = useState(null);
    const [publishDate, setPublishDate] = useState(null);
    const [publishTime, setPublishTime] = useState(null);

    const handleImageUpload = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(loggedInUser){ 
            const date = new Date();
            const publishDateTime = new Date(
                `${publishDate}T${publishTime}:00`
            ).getTime();
            const newPost = {
                postedBy,
                postText,
                image: image ? URL.createObjectURL(image) : null,
                upVotes: 0,
                downVotes: 0,
                publishedAt: date.getTime(),
                publishDateTime,
            };
            const updatedPosts = JSON.parse(localStorage.getItem("posts")) || [];
            updatedPosts.push(newPost);
            localStorage.setItem("posts", JSON.stringify(updatedPosts));
            onAddPost(updatedPosts);
            setPostedBy("");
            setPostText("");
            setImage(null);
            setPublishDate(null);
            setPublishTime(null);
            
        }
       else{
        alert("Please LOGIN TO ADD A NEW POST");
       }
          
    }
       

    return (
        <div className="new-post-container">
            <h2>Create a new post</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Posted by:
                    <input
                        type="text"
                        value={postedBy}
                        onChange={(event) => setPostedBy(event.target.value)}
                        required
                    />
                </label>
                <label>
                    Post text:
                    <textarea
                        value={postText}
                        onChange={(event) => setPostText(event.target.value)}
                        required
                    />
                </label>
                <label>
                    Image:
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewPost;