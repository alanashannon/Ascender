import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; 
import logger from 'redux-logger'; 
import rootReducer from '../reducers/root_reducer';

//returns a new store with root reducer and preloadedState passed in
const configureStore = (preloadedState = {}) => {
    let middleware = [thunk]; 
    if (process.env.NODE_ENV !== 'production') {
        middleware = [...middleware, logger];
    }
    return createStore(
        rootReducer, 
        preloadedState, 
        applyMiddleware(...middleware)
    );
};

export default configureStore; 