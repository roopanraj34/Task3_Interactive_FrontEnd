import React, { useEffect, useState } from 'react';

function BlogPosts() {
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/posts')
            .then((response) => response.json())
            .then((data) => {
                setBlogPosts(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            <ul>
                {blogPosts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BlogPosts;
