import React from 'react';
import ComponentE from './ComponentE';
import Service from './Service';
import { Certificate } from 'crypto';

Service.cleanRoom().then()
//Render Props
class ComponentC extends React.Component {
    constructor() {
        super();
        this.state = {
            roomStatus: 'cleaning room'
        }
        this.cleaningRoom = this.cleaningRoom.bind(this);
    }

    componentDidMount() {
        //debugger;
        this.cleaningRoom();
    }
    cleaningRoom() {
        Promise.all([
            Service.cleanRoom(),
            Service.removeGarbage(),
            Service.winIcecream()
        ]).then(() => {
            this.setState({
                roomStatus: 'all finished'
            })
            console.dir(this);
            console.log('all finished');
        })
        /*      
        Service.cleanRoom()
            .then((fromResolve) => {
                this.setState({
                    roomStatus: fromResolve
                })
                console.log('the room is ' + fromResolve);
            })
            .catch((fromReject) => {
                console.log('error from cleanroom ' + fromReject);
            });
            */
    }

    render() {
        const { roomStatus } = this.state;
        //debugger;
        return (
            <div>
                <h3>{roomStatus}</h3>
                <ComponentE></ComponentE>
            </div>
        )
    }
}

export default ComponentC