import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: true
        }
    }
       
    render() {
        return this.state.isLoggedIn && <div>Welcome Vikas Salvi</div>
        /*
        return this.state.isLoggedIn ?
        (
        <div>Welcome Vikas Salvi</div> 
        ) : (
            <div>Welcome Guest</div>
        )
        */

    }
}

export default UserGreeting