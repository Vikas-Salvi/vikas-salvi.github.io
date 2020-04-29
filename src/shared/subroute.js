import React, {} from 'react';
import { NavLink, Switch, Route, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import SubRouteChild from './subroutechild';

const SubRoute = ({match, location, history}) => {   
    //console.log(match);
    //console.log(location);
    //console.log(history);
    //debugger;
    return(
        <div>
            <ul>
                <li><NavLink to={`${match.url}/1`}>Sub Route 1</NavLink> </li>
                <li><NavLink to={`${match.url}/2`}>Sub Route 2</NavLink> </li>
                <li><NavLink to={{
                    pathname: `${match.url}/3`,
                    state: {
                        from: "subroute"
                    }
                }}>Sub Route 3</NavLink> </li>
            </ul>
            <h4>{match.path}</h4>   
            <Switch>
                <Route path={`${match.path}/:id`} component={SubRouteChild} ></Route>                
            </Switch>
        </div>
    )
}

export default SubRoute