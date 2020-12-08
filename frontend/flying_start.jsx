import React from "react"; 
import ReactDOM from "react-dom";

//TESTING ONLY
// import { signup, login, logout } from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';

document.addEventListener("DOMContentLoaded", () => {
    
    //TESTING ONLY
    window.signup = signup; 
    window.login = login; 
    window.logout = logout; 
    
    const root = document.getElementById('root'); 
    ReactDOM.render(<h1>Welcome to Flying Start</h1>, root);
})

