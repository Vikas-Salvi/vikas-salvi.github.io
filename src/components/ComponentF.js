import React, { Component } from 'react';
import {UserConsumer} from './userContext';

//Render Props
class ComponentF extends Component {
    
    render() {
        return (
            <UserConsumer>
                {
                    (username) =>{
                        return <h4>Hello! {username}</h4> 
                    }
                }
            </UserConsumer>           
        )
    }
}

export default ComponentF