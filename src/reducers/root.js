import { combineReducers } from 'redux';
import questions from "./quiz";

const rootReducers = combineReducers(
    {
        quizs : questions
    }
);


export default rootReducers;