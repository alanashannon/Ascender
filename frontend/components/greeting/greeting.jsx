import React from 'react'; 
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const newSession = () => (
        <nav className="login-nav-link">
            <Link to="/login">Log in</Link>
        </nav>
    );
    const greetingMessage = () => (
        <nav>
            <h2 className="logged-in-greeting">Hello, {currentUser.name}</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    return currentUser ? greetingMessage() : newSession(); 
}

export default Greeting;