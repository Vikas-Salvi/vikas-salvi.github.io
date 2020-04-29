import React, { Component } from 'react';

//Render Props
class HoverCounterTwo extends Component {
    
    render() {
        const {count, incrementCount} = this.props
        debugger;
        return (
            <div>                
                <h2 onMouseOver={incrementCount}>You Hovered {count} Times</h2>
            </div>
        )
    }
}

export default HoverCounterTwo