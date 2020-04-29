import React, { Component } from 'react';
import RegularComp from './RegularComp';
import PureComp from './PureComp';

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vikas'
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Athar'
            })
        }, 2000)
    }

    render() {
        console.log('************* Parent Comp render *****************');
        return (
            <div>
                <h3>Parent Component</h3>
                <RegularComp name={this.state.name}></RegularComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp