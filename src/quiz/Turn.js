import React, { useContext, useEffect } from 'react';

import { QuizContext } from './Quiz';

const Turn = () => {
    const state = useContext(QuizContext);
    //debugger;

    const onSelectHandle = (answer) => {
        if(!state.quiz.disable){
            state.quizDispatch({ type: 'selectAnswer', answer: answer });
        }
    }

    useEffect(() => {
        console.log('Turn component rendering...');
    }, [state.quiz.Question, state.quiz.disable]);

    console.log('Turn component again rendering...');
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 offset-1">
                    {
                        state.quiz.Question.question[0].imageUrl == '' ?
                            (
                                <div className="jumbotron">
                                    <h3>{state.quiz.Question.question[0].question}</h3>
                                </div>) :
                            (<img className="img img-responsive img-thumbnail" src={state.quiz.Question.question[0].imageUrl}></img>)
                    }
                </div>
                <div className="col-6">
                    <ul className="nav flex-column">
                        {
                            state.quiz.Question.answers.map((answer) => (
                                <li key={answer}
                                    disabled={state.quiz.disable}
                                    className={"nav-item nav-list-item " + (state.quiz.selectedAnswer === answer ? state.quiz.highlight : '')}
                                    onClick={() => onSelectHandle(answer)}>
                                    <h4>{answer}</h4>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Turn