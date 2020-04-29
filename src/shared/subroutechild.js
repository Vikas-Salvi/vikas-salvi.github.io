import React from 'react';
import {useParams, useLocation, useHistory} from 'react-router-dom';

const SubRouteChild = () => {
    const {id} = useParams();
    const location = useLocation();
    const history = useHistory();
    console.log(location);
    console.log(id);
    console.log(history);
    return(
        <div>
            <h2>Sub Route {id}</h2>
            <button onClick={()=>history.push('/')}>Go Home</button>
            <button onClick={()=>history.goBack()}>Go Back</button>
        </div>
    )
}

export default SubRouteChild