import React from "react"; 
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

//TESTING ONLY
// import { signup, login, logout } from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';

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
    window.signup = signup; 
    window.login = login; 
    window.logout = logout; 
    
    const root = document.getElementById('root'); 
    ReactDOM.render(<Root store={store} />, root);
})
