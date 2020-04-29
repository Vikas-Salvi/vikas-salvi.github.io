import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            parentName: 'Parent'
        }
        this.greedParentHandler = this.greedParentHandler.bind(this);
    }
    message = "No Message!";

    greedParentHandler(child) {
        alert(`Hello ${this.state.parentName} from ${child}`);
    }
   
    render() {
        return (
            <div>
                <h3>Parent Component</h3>
                <ChildComponent greetHandler={this.greedParentHandler}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent