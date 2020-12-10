import React from 'react'; 
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
    const newSession = () => (
        <nav className="login-nav-link">
            <Link to="/login">Log in</Link>
        </nav>
    );
    const greetingMessage = () => (
        <nav className="logged-in-menu">
            <img src="https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-2.1.0&w=40&h=40&fit=crop&v=&auto=format&frame=1&q=92&s=9a943d81556e01b3c5eb748ea31c4880" alt="icon"/>
            <br/>
            <div className="dropdown-nav">
                <div className="account-list">
                    <h3>Your Account</h3>
                        <ul>
                            <li>Saved projects</li>
                            <li>Recommended for you</li>
                            <li>Following</li>
                            <div className="account-nav">
                                <li>Profile</li>
                                <li>Settings</li>
                                <li>Messages</li>
                                <li>Activity</li>
                            </div>
                        </ul>
                </div>
                <div className="created-projects">
                    <h3>Created Projects</h3>
                        <ul>
                            <li>New</li>
                        </ul>
                </div>
                <div className="logout-footer">
                    <a onClick={logout}>Log Out</a>
                </div>
            </div>
        </nav>
    );

    return currentUser ? greetingMessage() : newSession(); 
}

export default Greeting;