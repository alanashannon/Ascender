export const fetchBackings = () => {
    return $.ajax({
        method: 'GET', 
        url: `/api/backings`
    });
};

export const createBacking = (backing) => {
    return $.ajax({
        method: 'POST', 
        url: `/api/backings`, 
        data: { backing }  //with {} ?
    });
};

export const fetchBacking = (backingId) => {
    return $.ajax({
        method: 'GET', 
        url: `/api/backings/${backingId}`, 
    });
}; 

export const updateBacking = (backing) => {
    return $.ajax({
        method: 'PATCH', 
        url: `/api/backings/${backing.id}`, 
        data: { backing }
    });
}; 

export const deleteBacking = (backingId) => {
    return $.ajax({
        method: 'DELETE', 
        url: `/api/backings/${backingId}`, 
    });
};