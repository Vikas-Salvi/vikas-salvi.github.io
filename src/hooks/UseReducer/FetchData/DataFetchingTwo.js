import React, { useReducer, useState, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    loading: true,
    error: '',
    post: {}
}
const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: action.error
            }
        default:
            return state
    }
}

const DataFetchingTwo = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                dispatch({type: 'FETCH_SUCCESS', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'FETCH_ERROR', error: 'Something went wrong'})
            })
    }, [])

    return (
        <div>
            <h3>Fetch Data using axios - part Two using Reducer</h3>
            {state.loading ? 'Loading...' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )

}

export default DataFetchingTwo