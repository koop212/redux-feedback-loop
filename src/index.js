import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';


// Store feedbacks here
const feedbackState = {
    feeling: '',
    understanding: '',
    support: '',
    comments: ''
}

// Reducer to make changes to the feedback state
const feedbackReducer = (state = feedbackState, action) => {
    // if(action.type === 'ADD_FEELING') {
    //     return state = {...state, feeling: action.payload}
    // } else if(action.type === 'ADD_UNDERSTANDING') {
    //     return state = { ...state, understanding: action.payload }
    // } else if(action.type === 'ADD_SUPPORT') {
    //     return state = { ...state, support: action.payload }
    // } else if(action.type === 'ADD_COMMENTS') {
    //     return state = {...state, comments: action.payload}
    // } else if(action.type === 'CLEAR_FEEDBACK') {
    //     return state = feedbackState
    // }
    // return state
    switch (action.type) {
        case 'ADD_FEELING':
            return state = { ...state, feeling: action.payload };
        case 'ADD_UNDERSTANDING':
            return state = { ...state, understanding: action.payload };
        case 'ADD_SUPPORT':
            return state = { ...state, support: action.payload }
        case 'ADD_COMMENTS':
            return state = { ...state, comments: action.payload };
        case 'CLEAR_FEEDBACK':
            return state = feedbackState;
        default:
            return state;
    }
}


const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
