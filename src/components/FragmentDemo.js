import React, { Component } from 'react';

class FragmentDemo extends Component {
    constructor(props){
        super(props);        
    }
  
    render() {
        return (
            <React.Fragment>
                <h3>Fragment Demo</h3>   
                <p>This describes the Fragment Component</p>             
            </React.Fragment> 
        )
    }
}

export default FragmentDemo