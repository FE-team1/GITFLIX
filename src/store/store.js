import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from "redux-logger";

export const store = createStore(
    undefined, 
    //reducer(switch(action.type))
    process.env.NODE_ENV === 'development' && 
    composeWithDevTools(applyMiddleware(logger))
    );