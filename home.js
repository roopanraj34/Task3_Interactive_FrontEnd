import React, { useState, useEffect } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulated API call to retrieve posts (replace with your actual API call)
    fetch('https://api.example.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data); // Update the state with the retrieved posts
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <div>
        <h3>Recent Posts</h3>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
