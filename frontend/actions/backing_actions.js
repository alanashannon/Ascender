import * as BackingApiUtil from '../util/backings_api_util';

export const RECEIVE_PROJECT_BACKINGS = "RECEIVE_PROJECT_BACKINGS";
export const RECEIVE_BACKING = "RECEIVE_BACKING";

const receiveProjectBackings = (backings) => ({
    type: RECEIVE_PROJECT_BACKINGS, 
    backings 
})

const receiveBacking = (backing) => ({
    type: RECEIVE_BACKING, 
    backing 
})

export const fetchProjectBackings = (projectId) => dispatch => (
    BackingApiUtil.fetchProjectBackings(projectId)
        .then((backings) => {
            debugger
            dispatch(receiveProjectBackings(backings))
        })
); 

export const createBacking = backing => dispatch => (
    BackingApiUtil.createBacking(backing)
        .then((backing) => dispatch(receiveBacking(backing)))
);