import React, { Component } from 'react';

//Render Props
class RenderPropsCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState(prevState => {
            return {count: prevState.count + 1 }
        })
    }

    render() {
        const {count} = this.state
        debugger;
        return (
            <div>      
                <h3>Render Props</h3>          
                {this.props.children(count, this.incrementCount)}
            </div>
        )
    }
}

export default RenderPropsCounter