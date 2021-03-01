import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer'; 
import projectsReducer from './projects_reducer';
import backingsReducer from './backings_reducer';
import rewardsReducer from './rewards_reducer';
import categoriesReducer from './categories_reducer';

//combining reducers that handle relational data
const entitiesReducer = combineReducers({
    users: usersReducer,
    projects: projectsReducer,
    backings: backingsReducer, 
    rewards: rewardsReducer, 
    categories: categoriesReducer,
}); 

export default entitiesReducer; 