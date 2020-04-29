import React, { Component } from 'react';
import Columns from './Columns';

class Table extends Component {
    constructor(props){
        super(props);        
    }
  
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <Columns></Columns>
                    </tr>
                </tbody>                
            </table> 
        )
    }
}

export default Table