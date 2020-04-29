import React, {useEffect, useMemo} from 'react';

const Title = (props) => {    
    console.log('Rendering Title');
    useEffect(()=>{        
        props.fetchData(1);        
    },[props.fetchData]);

    return (
    <div>
        <h2>Title component -useCallback Hook - {props.title}</h2>        
    </div>
    )

}

export default React.memo(Title)