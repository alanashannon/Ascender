import * as ProjectAPIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";

// action creators
const receiveAllProjects = (projects) => ({
    type: RECEIVE_ALL_PROJECTS, 
    projects 
});

const receiveProject = (project) => ({
    type: RECEIVE_PROJECT, 
    project 
});

const removeProject = (projectId) => ({
    type: REMOVE_PROJECT, 
    projectId 
})

//thunk actions
export const fetchProjects = (projects) => dispatch => (
    ProjectAPIUtil.fetchProjects(projects)
        .then(projects => dispatch(receiveAllProjects(projects)))
); 

export const fetchProject = (projectId) => dispatch => (
    ProjectAPIUtil.fetchProject(projectId)
        .then(project => dispatch(receiveProject(project)))
); 

export const createProject = (project) => dispatch => (
    ProjectAPIUtil.createProject(project)
        .then(project => dispatch(receiveProject(project)))
); 

export const updateProject = (project) => dispatch => (
    ProjectAPIUtil.updateProject(project)
        .then(project => dispatch(receiveProject(project)))
);

export const deleteProject = (projectId) => dispatch => (
    ProjectAPIUtil.deleteProject(projectId) 
        .then(() => dispatch(removeProject(projectId)))
);