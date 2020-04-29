import React, { Component } from 'react';
import UpdatedComponent from './WithCounter';
//Higher order component
class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        debugger;
        return (
            <div>
                <h3>Higher Order Component</h3>
                <h2 onMouseOver={incrementCount}>You Hovered {count} Times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)