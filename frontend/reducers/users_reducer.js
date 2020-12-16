import { RECEIVE_ALL_USERS } from '../actions/project_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

// keep track of all users
const usersReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
        case RECEIVE_ALL_USERS:
            return action.users; 
        default: 
            return state; 
    }
};

export default usersReducer; 