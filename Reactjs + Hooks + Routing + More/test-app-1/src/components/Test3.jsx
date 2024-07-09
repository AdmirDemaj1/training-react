import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function Test3() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setPosts(data))
    }, [])

    console.log(posts)

    return (
        <div>
          <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </div>
    )
}

export default Test3;