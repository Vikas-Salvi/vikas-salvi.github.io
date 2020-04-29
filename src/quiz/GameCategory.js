import React, { useContext, useEffect, useState, useReducer } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import { AppContext } from '../App';
import { QuestionBank } from './questionbank';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    card: {
        width: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    center: {
        alignItems: 'center',
        flexDirection: 'column'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    },
}));

const GameCategory = () => {

    const state = useContext(AppContext);

    const categories = QuestionBank.getGameCategories(QuestionBank.questions).uniqcategories;

    const [category, setCategory] = useState('');

    const onHandleChange = e => {
        setCategory(e.target.value);
        state.dispatch({ type: 'selectCategory', category: e.target.value });
    }

    useEffect(() => {
        console.log('Footer component rendering...');
    }, [])

    const classes = useStyles();
    console.log('Footer component again rendering...');
    //debugger;
    return (
        <div className="login-wrapper">
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image="images/duoquiz.jpg"
                    title="Quiz"
                />
                <CardContent>
                    <div className="jumbotron">
                        <h4>Welcome! {state.user.username}</h4>
                        <h5>{state.user.grade}</h5>
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Select the Game Category you would like to play!
                    </Typography>
                </CardContent>
                <CardActions className={classes.center}>
                    <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel id="game-category-label">
                            Game Categories
                        </InputLabel>
                        <Select
                            id="game-category-select"
                            value={category}
                            labelWidth={130}
                            onChange={onHandleChange}>
                            {
                                categories.map((category) =>
                                    (<MenuItem key={category} value={category}>{category}</MenuItem>)
                                )
                            }
                        </Select>
                    </FormControl>
                    <Link to="/quiz" className="nav-link-button nav-link-button-primary">Start Game!</Link>
                </CardActions>
            </Card>
        </div>
    )
}

export default GameCategory