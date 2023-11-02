import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPost.css';

function NewPost() {
    const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission, e.g., save it to your database
    console.log('New Post Data:', post);
    navigate('/');
  };

  return (
    <div className="new-post">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            name="content"
            value={post.content}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default NewPost;
