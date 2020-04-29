import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';

//Higher order component
class ClickCounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h3>Higher Order Component</h3>
                <button onClick={incrementCount}>You Clicked {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter) 