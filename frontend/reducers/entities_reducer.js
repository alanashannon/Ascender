import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer'; 

//combining reducers that handle relational data
const entitiesReducer = combineReducers({
    users: usersReducer
}); 

export default entitiesReducer; 