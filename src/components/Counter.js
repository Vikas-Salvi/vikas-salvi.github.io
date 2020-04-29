import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    incrementCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }
        ),
            () => {
                alert('count: ' + this.state.count);
            }
        )
        /*
        this.setState({
            count: this.state.count + 1
        },
            () => {
                alert('count: ' + this.state.count);
            }
        )
        */

    }

    render() {
        return (
            <div>
                <h4>{this.state.count}</h4>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
        )
    }
}

export default Counter