import React, {useState, useEffect} from 'react'
import Post from './Post';

const Posts = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setPosts(json);
                setLoading(false);
            });
    }, []);


    return (
        <div>
            {loading && "LOADING"}
            {!loading && posts.map((post) => (<Post post={post} key={post.id} />))}
        </div>
    )
}

export default Posts
