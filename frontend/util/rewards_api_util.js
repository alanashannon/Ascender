export const fetchRewards = ()=> {
    return $.ajax({
        method: 'GET', 
        url: `/api/rewards`
    })
}

export const createReward = (reward) => {
    return $.ajax({
        method: 'POST', 
        url: `/api/rewards`,
        data: { reward } 
    })
};

export const fetchReward = (rewardId) => {
    return $.ajax({
        method: 'GET', 
        url: `/api/rewards/${rewardId}`, 
    })
};

export const updateReward = (reward) => {
    return $.ajax({
        method: 'PATCH', 
        url: `/api/rewards/${reward.id}`,
        data: { reward }
    })
};

export const deleteReward = (rewardId) => {
    return $.ajax({
        method: 'DELETE', 
        url: `/api/rewards/${rewardId}`, 
    })
};

