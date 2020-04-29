import React, { Component } from 'react';

class Timer extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date().toString()
        }
    }

    counter = setInterval(() => {
        this.changeTimer();
    }, 1000);

    changeTimer() {
        this.setState({
            date: new Date().toString()
        })
    }
    
    render() {
        return (
            <div>
                <h4>{this.state.date}</h4>
            </div>
        )
    }
}

export default Timer