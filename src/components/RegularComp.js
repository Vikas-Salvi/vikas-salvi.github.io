import React, { Component } from 'react';
import { cloneNode } from '@babel/types';

class RegularComp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(' Regular Comp render ');
        return (
            <div>
                <h3>Regular Component {this.props.name}</h3>
            </div>
        )
    }
}

export default RegularComp