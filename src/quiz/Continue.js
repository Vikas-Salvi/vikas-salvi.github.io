import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { QuizContext } from './Quiz';

const useStyles = makeStyles(theme => ({
    card: {
        width: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    menuButton: {
        marginRight: theme.spacing(2),
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

const Continue = () => {
    const history = useHistory();
    const state = useContext(QuizContext);

    const onContinue = e => {
        e.preventDefault();
        state.quizDispatch({ type: 'continue' });
    }

    const onRestart = e => {
        e.preventDefault();
        state.quizDispatch({ type: 'reset' });
    }

    const onStop = e => {
        e.preventDefault();
        state.quizDispatch({ type: 'stop' });
        history.push("/game");
    }

    useEffect(() => {
        console.log('Continue component rendering....');
    }, []);

    const classes = useStyles();
    debugger;
    return (
        <React.Fragment>
            <p></p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4 offset-1">
                        <Button variant="contained" color="primary" disabled={state.quiz.continuedisabled} onClick={onContinue}>Continue</Button>
                    </div>
                    <div className="col-4 offset-1">
                        <Button variant="contained" onClick={onRestart} className={classes.menuButton}>Restart Game!</Button>
                        <Button variant="contained" onClick={onStop} color="secondary" className={classes.menuButton}>Stop Game!</Button>
                        <h4>You scored {state.quiz.percentage} % / 100 %</h4>
                        <small>Attempted, {state.quiz.attemptedCount} of {state.quiz.Question.questionsByCategory.length} questions</small>
                        <br />
                        <small>To win, you must score 80%</small>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Continue