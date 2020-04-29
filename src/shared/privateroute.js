import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import globalService from './globalservice';
import {AppContext} from '../App';

const PrivateRoute = ({component: Component, ...rest}) => {
    const state = useContext(AppContext);
    //debugger;
    useEffect(()=>{
        console.log('PrivateRoute component rendering...');
    },[state.user.isLoggedIn]);
 
    return(
        <Route {...rest} render={(props)=>(
            state.user.isLoggedIn
            ? <Component {...props}></Component>
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location} 
            }}></Redirect>
        )}></Route>
    )
}

export default PrivateRoute