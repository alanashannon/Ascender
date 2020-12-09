import React from 'react'; 
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const newSession = () => (
        <nav>
            <Link to="/login">Log In</Link>
        </nav>
    );
    const greetingMessage = () => (
        <nav>
            <h2>Hello, {currentUser.name}</h2>
            <button onClick={logout}>Log Out</button>
        </nav>
    );

    return currentUser ? greetingMessage() : newSession(); 
}

export default Greeting;