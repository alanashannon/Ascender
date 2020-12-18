import { RECEIVE_PROJECT_BACKINGS, RECEIVE_BACKING } from '../actions/backing_actions';
import { RECEIVE_PROJECT} from '../actions/project_actions';
import merge from 'lodash/merge';

const backingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    switch (action.type) {
        case RECEIVE_PROJECT_BACKINGS:
            debugger
            return merge({}, oldState, { [action.backings.project_id]: action.backings }) //TODO fix this?
        case RECEIVE_BACKING:
            return merge({}, oldState, action.backing) 
        case RECEIVE_PROJECT:
            return merge({}, oldState, action.project.backings)
        default: 
            return oldState
    }
}

export default backingsReducer; 