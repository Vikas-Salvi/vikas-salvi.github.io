import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './privateroute';

const PrivateRouter = ({component: Component, context, ...rest}) => {
    const {Provider} = context; 
    debugger;
    useEffect(()=>{
        console.log('PrivateRoute component rendering...');
    },[]);

    return(
        <Provider>
            <PrivateRoute component={Component} {...rest}></PrivateRoute>
        </Provider>
    )
}

export default PrivateRouter