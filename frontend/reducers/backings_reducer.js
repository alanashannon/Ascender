import { RECEIVE_ALL_BACKINGS, RECEIVE_BACKING, REMOVE_BACKING } from '../actions/backing_actions';

const backingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_BACKINGS:
            return action.backings
        case RECEIVE_BACKING:
            return Object.assign({}, newState, { [action.backing.id]: action.backing }) 
        case REMOVE_BACKING:
            delete newState[action.backingId]
            return newState; 
        default: 
            return oldState
    }
}

export default backingsReducer; 