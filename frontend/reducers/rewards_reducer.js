import { RECEIVE_ALL_REWARDS, RECEIVE_REWARD, REMOVE_REWARD } from '../actions/reward_actions';

const rewardsReducer = (state = {}, action) => {
    Object.freeze(state); 
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_ALL_REWARDS: 
            return action.rewards;
        case RECEIVE_REWARD:
            return Object.assign({}, state, action.reward.reward)
        case REMOVE_REWARD: 
            delete newState[action.rewardId]
            return newState; 
        default: 
            return state; 
    }
}

export default rewardsReducer; 