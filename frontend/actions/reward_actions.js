import * as RewardApiUtil from '../util/rewards_api_util';

export const RECEIVE_PROJECT_REWARDS = "RECEIVE_PROJECT_REWARDS";
export const RECEIVE_REWARD = "RECEIVE_REWARD"; 

const receiveProjectRewards = rewards => ({
    type: RECEIVE_PROJECT_REWARDS,
    rewards 
});

const receiveReward = reward => ({
    type: RECEIVE_REWARD, 
    reward 
})

export const fetchProjectRewards = projectId => dispatch => (
    RewardApiUtil.fetchProjectRewards(projectId)
        .then((rewards) => dispatch(receiveProjectRewards(rewards)))
);

export const createReward = reward => dispatch => (
    RewardApiUtil.createReward(reward)
        .then((reward) => dispatch(receiveReward(reward)))
); 