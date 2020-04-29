import React from 'react';

import { QuestionBank } from './questionbank';

const useQuizState = (initialState) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'startgame': {
                debugger;
                const _category = action.category ? action.category : 'pictures';
                return {
                    ...state,
                    category: _category,
                    Question: QuestionBank.getQuestions([0], QuestionBank.questions, _category)
                }
            }
            case 'selectAnswer': {
                const _isCorrect = state.Question.question[0].answers.map((answer) => answer === action.answer)[0];
                const _selectedAnswer = action.answer;
                const _highlight = _isCorrect ? 'green' : 'red';
                return {
                    ...state, isCorrect: _isCorrect, disable: true, highlight: _highlight, selectedAnswer: _selectedAnswer,
                    correctAnswers: _isCorrect ? state.correctAnswers + 1 : state.correctAnswers, continuedisabled: false
                }
            }
            case 'continue':
                const _attemptedCount = state.attemptedCount + 1;
                const _percentage = Math.round((100 * state.correctAnswers) / state.Question.questionsByCategory.length);
                const _isWinner = _percentage >= 80 ? 'winner' : 'loser';
                if (_attemptedCount == state.Question.questionsByCategory.length) {
                    return {
                        ...state, Question: QuestionBank.getQuestions(state.selectedQuestions, QuestionBank.questions, state.category),
                        isCorrect: '', disable: false, highlight: '', percentage: _percentage, attemptedCount: _attemptedCount,
                        selectedAnswer: '', isWinner: _isWinner, continuedisabled: true
                    }
                }
                else {
                    return {
                        ...state, Question: QuestionBank.getQuestions(state.selectedQuestions, QuestionBank.questions, state.category),
                        isCorrect: '', disable: false, highlight: '', percentage: _percentage, attemptedCount: _attemptedCount,
                        selectedAnswer: '', continuedisabled: true
                    }
                }
            case 'reset':
                const _category = state.category ? state.category : 'pictures';
                return {
                    ...initialState,
                    category: _category,
                    Question: QuestionBank.getQuestions([0], QuestionBank.questions, _category)
                }
            case 'stop':
                return {
                    ...initialState
                }
            default:
                return state
        }
    }

    return [reducer]

}

export default useQuizState