import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Message to Visitor!'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thankyou Visitor!'
        })
    }

    render() {
        return (
            <div>
                <h4>{this.state.message}</h4>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message