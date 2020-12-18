export const fetchProjectBackings = (projectId) => {
    return $.ajax({
        method: 'GET', 
        url: `/api/projects/${projectId}/backings`
    })
};

export const createBacking = (backing) => {
    return $.ajax({
        method: 'POST', 
        url: `/api/projects/${backing.project_id}/backings`,
        data: { backing }
    })
};