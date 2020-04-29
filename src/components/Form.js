import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'Vikas',
            comments: '',
            topic: 'react'
        }
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        },
            () => {                
                console.log(this.state.username);
            }
        )
    }

    handleTopicChange = (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state}`);
        console.log(this.state);
        event.preventDefault();
    }

    render() {
        const {username, comments, topic} =  this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div><h3>Form Component</h3></div>
                <div>
                    <span>{username}</span>
                    <div>
                        <label>User Name</label>:
                         <input type="text" onChange={this.handleUserNameChange}></input>
                    </div>
                </div>
                <div>
                    <label>Select Topic:</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form