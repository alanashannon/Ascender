import { combineReducers } from 'redux'; 
import sessionErrorsReducer from './session_errors_reducer';

//keep track of error messages, combine reducers that handle errors
const errorsReducer = combineReducers({
    session: sessionErrorsReducer
}); 

export default errorsReducer; 