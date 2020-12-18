import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer'; 
import projectsReducer from './projects_reducer';
import backingsReducer from './backings_reducer';

//combining reducers that handle relational data
const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    backings: backingsReducer
}); 

export default entitiesReducer; 