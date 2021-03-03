import * as BackingApiUtil from '../util/backings_api_util';

export const RECEIVE_ALL_BACKINGS = "RECEIVE_ALL_BACKINGS";
export const RECEIVE_BACKING = "RECEIVE_BACKING";
export const REMOVE_BACKING = "REMOVE_BACKING"; 

const receiveBackings = (backings) => ({
    type: RECEIVE_ALL_BACKINGS, 
    backings 
})

const receiveBacking = (backing) => ({
    type: RECEIVE_BACKING, 
    backing 
})

const removeBacking = (backingId) => ({
    type: REMOVE_BACKING, 
    backingId
})

export const fetchBackings = () => dispatch => (
    BackingApiUtil.fetchBackings()
        .then((backings) => dispatch(receiveBackings(backings)))
); 

export const createBacking = (backing) => dispatch => (
    BackingApiUtil.createBacking(backing)
        .then((backing) => dispatch(receiveBacking(backing)))
);

export const fetchBacking = (backingId) => dispatch => {
    return BackingApiUtil.fetchBacking(backingId)
        .then((backing) => dispatch(receiveBacking(backing)))
}; 

export const updateBacking = (backing) => dispatch => {
    return BackingApiUtil.updateBacking(backing)
        .then((backing) => dispatch(receiveBacking(backing)))
}; 

export const deleteBacking = (backingId) => dispatch => {
    return BackingApiUtil.deleteBacking(backingId) 
        .then(() => dispatch(removeBacking(backingId)))
};