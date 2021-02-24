import * as RewardApiUtil from '../util/rewards_api_util';

export const RECEIVE_ALL_REWARDS = "RECEIVE_ALL_REWARDS";
export const RECEIVE_REWARD = "RECEIVE_REWARD"; 
export const REMOVE_REWARD = "REMOVE_REWARD";

const receiveRewards = rewards => ({
    type: RECEIVE_ALL_REWARDS,
    rewards 
});

const receiveReward = reward => ({
    type: RECEIVE_REWARD, 
    reward 
});

const removeReward = (rewardId) => ({
    type: REMOVE_REWARD, 
    rewardId
});

export const fetchRewards = () => dispatch => {
    return RewardApiUtil.fetchRewards()
        .then((rewards) => dispatch(receiveRewards(rewards)))
}

export const createReward = reward => dispatch => (
    RewardApiUtil.createReward(reward)
        .then((reward) => dispatch(receiveReward(reward)))
); 

export const fetchReward = (rewardId) => dispatch => {
    return RewardApiUtil.fetchReward(rewardId) 
        .then((reward) => dispatch(receiveReward(reward)))
};

export const updateReward = (reward) => dispatch => {
    return RewardApiUtil.updateReward(reward) 
        .then((reward) => dispatch(receiveReward(reward)))
};

export const deleteReward = (rewardId) => dispatch => {
    return RewardApiUtil.deleteReward(rewardId) 
        .then(() => dispatch(removeReward(rewardId)))
};