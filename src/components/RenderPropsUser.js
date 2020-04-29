import React, {Component} from 'react';

class RenderPropsUser extends Component{        
    render(){
        return (
            <h4>Hello! {this.props.render(true)}, you are inside Render Props</h4>
        )
    }
}

export default RenderPropsUser