import React from 'react'; 
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.container = React.createRef(); 
        this.state = {
            open: false, 
        }

        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this); 
        this.handleClickInside = this.handleClickInside.bind(this); 
    }

    componentDidMount() {
        this.props.fetchProjects(); 
        document.addEventListener("mouseup", this.handleClickOutside);
    }

    handleDropdown(e) {
        e.preventDefault(); 
        this.setState({
            open: !this.state.open 
        });
    };

    handleClickOutside(e) {
        if (this.container.current && !this.container.current.contains(e.target)) {
            this.setState({
                open: false, 
            });
        };
    };

    handleClickInside() {
        this.setState({
            open: false 
        });
    };
    
    render () {

        let projects = Object.values(this.props.projects);
        let projectsArr = []; 
        {if (this.props.currentUser) {
            projects.forEach((project) => {
                if (project.author_id === this.props.currentUser.id) {
                    projectsArr.push(project);
                }
            })};
        };

        const newSession = () => (
            <nav className="login-nav-link">
                <Link className="login-header-link" to="/login">Log in</Link>
            </nav>
        );
        const greetingMessage = () => (
            <nav className="logged-in-menu" id="logged-in-menu" ref={this.container}>
                <div className="icon" onClick={this.handleDropdown}>
                    <img src="https://ksr-ugc.imgix.net/missing_user_avatar.png?ixlib=rb-2.1.0&w=40&h=40&fit=crop&v=&auto=format&frame=1&q=92&s=9a943d81556e01b3c5eb748ea31c4880" alt="icon" />
                </div>
                <br/>
                {this.state.open && (<div className="dropdown-nav" id="dropdown-nav">
                    <div className="account-list">
                        <h3>Your Account</h3>
                            {/* <ul>
                                <li>Saved projects</li>
                                <li>Recommended for you</li>
                                <li>Following</li>
                                <div className="account-nav">
                                    <li>Profile</li>
                                    <li>Settings</li>
                                    <li>Messages</li>
                                    <li>Activity</li>
                                </div>
                            </ul> */}
                            <ul onClick={this.handleClickInside}>
                                <li>
                                    <Link to={"/profile"} className="temp-links">Profile</Link>
                                </li>
                                <div className="account-nav">
                                    <li>
                                        <a className="temp-links" href="https://github.com/alanashannon">Github</a>
                                    </li>
                                    <li>
                                        <a className="temp-links" href="https://www.linkedin.com/in/alana-shannon/">Linkedin</a>
                                    </li>
                                    <li>
                                        <a className="temp-links" href="https://angel.co/u/alana-shannon">Angel List</a>
                                    </li>
                                </div>
                            </ul>
                    </div>
                    <div className="created-projects" onClick={this.handleClickInside}>
                        <h3>Created Projects</h3>
                        {projectsArr.slice(0, 3).map((project, i) => {
                            return(
                                <div key={i} className="user-projects-container">
                                    <img src={project.photo} className="user-projects-image"/>
                                    <div className="user-projects-greeting-title">
                                        <Link to={`/projects/${project.id}`} className="projects-greeting-title-link">{project.title}</Link>
                                    </div>
                                </div>
                            )
                        })}
                        <ul>
                            <Link className="created-projects-links" to={"/projects/new"}>
                                <li>
                                    <AiOutlinePlus size={15} className="plus-icon"/>
                                    New
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="logout-footer" onClick={this.handleClickInside}>
                        <a onClick={this.props.logout}>Log Out</a>
                    </div>
                </div>)}
            </nav>
        );

        return this.props.currentUser ? greetingMessage() : newSession(); 

    }
}

export default Greeting;