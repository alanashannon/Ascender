import { RECEIVE_ALL_BACKINGS, RECEIVE_BACKING, REMOVE_BACKING } from '../actions/backing_actions';

const backingsReducer = (oldState = {}, action) => {
    Object.freeze(oldState); 
    let newState = Object.assign({}, oldState)
    switch (action.type) {
        case RECEIVE_ALL_BACKINGS:
            return action.backings
        case RECEIVE_BACKING:
            let backingKeys = Object.keys(action.backing.backings)
            let newBacking = backingKeys[backingKeys.length - 1]
            return Object.assign({}, newState, { [newBacking]: action.backing.backings[newBacking] }) 
        case REMOVE_BACKING:
            delete newState[action.backingId]
            return newState; 
        default: 
            return oldState
    }
}

export default backingsReducer; 