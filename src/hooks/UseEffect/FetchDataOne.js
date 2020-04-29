import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchDataOne = () => {
    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    const [idFromButton, setIdFromButton] = useState(1);

    const handleClick = () => {
        setIdFromButton(id);
    }
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButton}`)
            .then((res) => {
                console.log(res);
                setPost(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButton])

    return (
        <div>
            <h3>Fetch Data using axios - part One</h3>
            <h5>Fetch One data/post by id</h5>            
            <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={handleClick}>Fetch Post</button>
            <div>
                <span>User Id: {post.userId}</span>, <span>Title: {post.title}</span>
            </div>
            <h5>Fetch all posts</h5>
            <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}> User Id: {post.userId}, Title: {post.title}</li>
                    })
                }
            </ul>
        </div>
    )

}

export default FetchDataOne