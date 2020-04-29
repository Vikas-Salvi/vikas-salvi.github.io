import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingOne = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                console.log(res);
                setLoading(false);
                setPost(res.data);
            })
            .catch(err => {
                setLoading(false);
                setPost({});
                setError('Something went wrong: ' + err);
            })
    }, [])

    return (
        <div>
            <h3>Fetch Data using axios - part One</h3>
            {loading ? 'Loading...' : post.title}
            {error ? error : null}
        </div>
    )

}

export default DataFetchingOne