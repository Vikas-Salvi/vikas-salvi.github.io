import React, { Component } from 'react';
import ComponentF from './ComponentF';
import ComponentC from './ComponentC';
import UserContext from './userContext';

//Render Props
class ComponentE extends Component {
    constructor(){
        super();
    }    
    
    render() {
        return (
            <div>    
                Component E context {this.context}            
                <ComponentF></ComponentF>
            </div>
        )
    }
}

ComponentE.contextType = UserContext

export default ComponentE