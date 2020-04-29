import React, { Component, useEffect, useState } from 'react';
import HookMouse from './HookMouse';

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h3>Interval Class Counter - Use Effect - with incorrect dependency</h3>
                <h4>{this.state.count}</h4>
            </div>
        )
    }

}

export default IntervalClassCounter