import React, { useContext, useEffect, useReducer, useState } from 'react';
import './quizstyles.css';
import Turn from './Turn';
import Continue from './Continue';
import Footer from './Footer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useQuizState from './useQuizState';
import { AppContext } from '../App';

export const QuizContext = React.createContext(null);

const initialState = {
    Question: null,
    category: '',
    highlight: '',
    disable: false,
    continuedisabled: true,
    selectedQuestions: [],
    selectedAnswer: '',
    correctAnswers: 0,
    percentage: '0',
    isCorrect: false,
    attemptedCount: 0,
    isWinner: ''
}

const [reducer] = useQuizState(initialState);

const Quiz = () => {
    const appstate = useContext(AppContext);
    //debugger;
    const [quiz, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        console.log('Quiz component rendering...');
        dispatch({ type: 'startgame', category: appstate.user.category });
    }, [])
    //debugger;
    return (
        <div className="container-fluid">
            <QuizContext.Provider value={{ quiz: quiz, quizDispatch: dispatch }}>
                <Card>
                    <CardContent>
                        {
                            quiz.Question != null ?
                                (
                                    <div>
                                        <Turn></Turn>
                                        <Continue></Continue>
                                        <Footer isOpen={quiz.isWinner != ''}></Footer>
                                    </div>
                                ) : null
                        }
                    </CardContent>
                </Card>
            </QuizContext.Provider>
        </div>
    );

}

export default Quiz;
