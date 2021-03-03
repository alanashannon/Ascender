import React from "react"; 
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

//TESTING ONLY
// import { signup, login, logout } from './util/session_api_util';
// import { signup, login, logout } from './actions/session_actions';
// import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from "./util/project_api_util";
// import { fetchProjects, fetchProject, createProject, updateProject, deleteProject } from "./actions/project_actions";
import { fetchRewards, createReward, fetchReward, updateReward, deleteReward } from './actions/reward_actions';
import { fetchBackings, createBacking, fetchBacking, updateBacking, deleteBacking } from './actions/backing_actions';
import { fetchCategories } from './actions/categories_actions';

document.addEventListener("DOMContentLoaded", () => {
    let store; 
    //stays logged in after refresh
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState); 
        delete window.currentUser; 
    } else {
        store = configureStore(); 
    }
    
    //TESTING ONLY
    window.getState = store.getState; 
    window.dispatch = store.dispatch; 
    window.fetchRewards = fetchRewards;
    window.createReward = createReward; 
    window.fetchBackings = fetchBackings;
    window.createBacking = createBacking; 
    window.fetchBacking = fetchBacking; 
    window.updateBacking = updateBacking; 
    window.deleteBacking = deleteBacking; 
    window.fetchReward = fetchReward;
    window.updateReward = updateReward; 
    window.deleteReward = deleteReward; 
    window.fetchCategories = fetchCategories; 
    
    const root = document.getElementById('root'); 
    ReactDOM.render(<Root store={store} />, root);
})

