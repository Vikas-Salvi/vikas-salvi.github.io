import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import LoginForm from './loginform';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    center: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    card: {
        width: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
}));

const Login = ({ user, ...props }) => {
    const dateToday = new Date().toString();
    const classes = useStyles(); 
    
    useEffect(()=>{
        console.log('Login component rendering...');
    },[]);

    console.log('Login component again rendering...');
    
    return (
        <div className="login-wrapper">
            <Card className={classes.card}>
                <CardHeader
                    title="Login to play the Quiz"
                />
                <CardMedia
                    className={classes.media}
                    image="images/quiz.jpg"
                    title="Quiz time"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Let's play the quiz and win exiting prizes!
                    </Typography>
                </CardContent>
                <CardActions className={classes.center}>
                    <LoginForm {...props}></LoginForm>
                </CardActions>
            </Card>
        </div>
    );

}

export default Login;
