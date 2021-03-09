import React from 'react'; 
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

class Greeting extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProjects(); 
    }

    render () {
        let projects = Object.values(this.props.projects)
        let projectsArr = []; 
        {if (this.props.currentUser) {
            projects.forEach((project) => {
                if (project.author_id === this.props.currentUser.id) {
                    projectsArr.push(project)
                }
            })}
        }

        const newSession = () => (
            <nav className="login-nav-link">
                <Link to="/login">Log in</Link>
            </nav>
        );
        const greetingMessage = () => (
            <nav className="logged-in-menu">
                <div className="icon">
                    <img src="https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-2.1.0&w=40&h=40&fit=crop&v=&auto=format&frame=1&q=92&s=9a943d81556e01b3c5eb748ea31c4880" alt="icon" />
                </div>
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
                        <div className="created-projects-container">
                            {projectsArr.slice(0, 3).map((project, i) => {
                                return(
                                    <div key={i} className="user-projects-container">
                                        <img src={project.photo}/>
                                        <div className="user-projects-greeting-title">
                                            <Link to={`/projects/${project.id}`} className="projects-greeting-title-link">{project.title}</Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <ul>
                            <li>
                                <AiOutlinePlus size={15} className="plus-icon"/>
                                <Link className="created-projects-links" to={"/projects/new"}>New</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="logout-footer">
                        <a onClick={this.props.logout}>Log Out</a>
                    </div>
                </div>
            </nav>
        );

        return this.props.currentUser ? greetingMessage() : newSession(); 

    }
}

export default Greeting;