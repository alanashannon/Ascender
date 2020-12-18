export const fetchProjectRewards = (projectId)=> (
    $.ajax({
        method: 'GET', 
        url: `/api/projects/${projectId}/rewards`
    })
)

export const createReward = (reward) => {
    return $.ajax({
        method: 'POST', 
        url: `/api/projects/${reward.project_id}/rewards`,
        data: {reward} 
    })
};