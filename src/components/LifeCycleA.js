import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vikas'
        }
        console.log('LifecycleA constructor');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('LifecycleA DidMount');
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevPros, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate');
    }

    changeState = () => {
        this.setState({
            name: 'Babulal'
        })
    }

    render() {
        console.log('LifecycleA render');
        return (
            <div>
                <div>Component Mounting</div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB></LifeCycleB>
            </div>
        )
    }
}

export default LifeCycleA