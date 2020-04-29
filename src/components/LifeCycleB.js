import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Vikas'
        }
        console.log('LifecycleB constructor');
    }
    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log('LifecycleB DidMount');
    }
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate');
        return true;
    }
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate');
    }
    getSnapshotBeforeUpdate(prevPros, prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate');
        return null;
    }
    
    render() {
        console.log('LifecycleB render');
        return (   
            <div>Lifecycle B</div>             
        )
    }
}

export default LifeCycleB