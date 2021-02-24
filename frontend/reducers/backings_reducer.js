import { RECEIVE_ALL_BACKINGS, RECEIVE_BACKING, REMOVE_BACKING } from '../actions/backing_actions';
import { RECEIVE_PROJECT} from '../actions/project_actions';
import merge from 'lodash/merge';

const backingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_BACKINGS:
            return action.backings
            // return merge({}, oldState, { [action.backings.project_id]: action.backings }) //TODO fix this?
        case RECEIVE_BACKING:
            return Object.assign({}, oldState, action.backing) 
        case RECEIVE_PROJECT:
            return merge({}, oldState, action.project.backings)
        case REMOVE_BACKING:
            delete newState[action.backingId]
            return newState; 
        default: 
            return oldState
    }
}

export default backingsReducer; 