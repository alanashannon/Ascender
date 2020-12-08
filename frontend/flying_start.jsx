import React from "react"; 
import ReactDOM from "react-dom";
import configureStore from './store/store';

//TESTING ONLY
// import { signup, login, logout } from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    // const preloadedState = {
    //     entities: {
    //         users: { 
    //             1: {
    //                 id: 1, 
    //                 name: "Alana", 
    //                 email: "alana@aa.io", 
    //                 location: "sf"
    //             }
    //         }
    //     },
    //     session: {
    //         id: null,
    //     },
    //     errors: {
    //         session: ["No current user"]
    //     }
    // }
    const store = configureStore(); 
    
    //TESTING ONLY
    window.getState = store.getState; 
    window.dispatch = store.dispatch; 
    window.signup = signup; 
    window.login = login; 
    window.logout = logout; 
    
    const root = document.getElementById('root'); 
    ReactDOM.render(<h1>Welcome to Flying Start</h1>, root);
})

