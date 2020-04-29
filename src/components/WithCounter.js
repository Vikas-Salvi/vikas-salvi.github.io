import React, { Component } from 'react';

//Higher order component

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component{
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

        render(){
            return <OriginalComponent 
            count={this.state.count}
            incrementCount={this.incrementCount}
            ></OriginalComponent>
        }
    }
    return NewComponent
}

export default UpdatedComponent