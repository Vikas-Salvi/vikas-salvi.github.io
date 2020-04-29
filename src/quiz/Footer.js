import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import { QuizContext } from './Quiz';
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: 'transparent',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
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
}));

const Footer = ({ isOpen }) => {

    const state = useContext(QuizContext);

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        state.quizDispatch({ type: 'reset' });
        setOpen(false);
    };
    const onRestart = () => {
        state.quizDispatch({ type: 'reset' });
        setOpen(false);
    }

    useEffect(() => {
        console.log('Footer component rendering...');
        setOpen(isOpen);
    }, [isOpen])

    const classes = useStyles();
    console.log('Footer component again rendering...');
    //debugger;
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 250,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper}>
                    <Card className={classes.card}>
                        {
                            state.quiz.isWinner === 'winner' ? (
                                <CardMedia
                                    className={classes.media}
                                    image="images/winner.png"
                                    title="Winner"
                                />
                            ) :
                                (
                                    <CardMedia
                                        className={classes.media}
                                        image="images/loser.jpg"
                                        title="Loser"
                                    />
                                )
                        }
                        <CardContent className={classes.center}>
                            <h4 className="text-center">You scored {state.quiz.percentage} %</h4>
                        </CardContent>
                        <CardActions className={classes.center}>
                            <Button onClick={onRestart} color="secondary" size="large">Resart Game</Button>
                        </CardActions>
                    </Card>
                </div>
            </Fade>
        </Modal>
    )
}

export default Footer