import React, { Component } from 'react';

class ClassClick extends Component {
    constructor(props){
        super(props);
        //this.clickHandler = this.clickHandler.bind(this);
    }
    message = "No Message!";
    //clickHandler(eve) {
    //    this.message = "Message from class click";
    //    console.log(this);
    //}
    clickHandler = () =>{
        this.message = "Message from class click";
        console.log(this);
    }

    render() {
        return (
            <div>
                <h5>{this.message}</h5>
                <h4>Class Click <button onClick={this.clickHandler}>Class Event Handling</button></h4>
            </div>
        )
    }
}

export default ClassClick