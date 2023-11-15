// useBlogPosts.js
import { useEffect, useState } from 'react';

function useBlogPosts() {
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

    return blogPosts;
}

export default useBlogPosts;
