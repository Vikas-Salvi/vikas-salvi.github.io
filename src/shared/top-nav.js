import React, { useContext, useEffect } from 'react';
import  {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { Button, Link } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import globalService from './globalservice';

import { AppContext } from '../App';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(3),
    },
    title: {
        flexGrow: 1,
    },
}));

const TopNavigation = ({ username, isLoggedIn }) => {
    const history = useHistory();
    const appstate = useContext(AppContext);
    const classes = useStyles();
    const onNavigate = e => {
        e.preventDefault();
        globalService.signout()
        .then((res)=>{            
            appstate.dispatch({type: 'logout'});
            history.push("/login");
        });        
    }

    useEffect(()=>{
        console.log('Top nav component rendering...');
    },[username, isLoggedIn]);

    console.log('Top nav component again rendering...');
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5">
                        App
                    </Typography>     
                    <Typography variant="h5">&nbsp;</Typography>                             
                    <NavLink to="/game" className="nav-link" >Game</NavLink>
                    <NavLink to="/form" className="nav-link" >Form</NavLink>
                    <NavLink to="/welcome" className="nav-link" >Welcome</NavLink>
                    <NavLink to="/subroute" className="nav-link">Sub Route</NavLink>
                    <NavLink to="/charts" className="nav-link">Charts</NavLink>                  
                    <p className={classes.title}></p> 
                    {
                        isLoggedIn ? 
                        (<NavLink to="/" className="nav-link" onClick={onNavigate}>Logout</NavLink>) : 
                        null
                    }
                    <IconButton
                        aria-label="account of current user"
                        color="inherit">
                        <AccountCircle />
                        <Typography variant="h6" className={classes.title}>
                            {username}
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default TopNavigation;
