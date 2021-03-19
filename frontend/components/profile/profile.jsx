import React from 'react'; 
import { Link } from 'react-router-dom'; 

class Profile extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            currentPage: "projects", 
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchProjects(); 
        this.props.fetchBackings(); 
        this.props.fetchUsers(); 

        let projectPage = document.getElementById("projects")
        projectPage.style.fontWeight = "bold"
        projectPage.style.color = "green"
    }

    handleClick(e) {
        e.preventDefault(); 
        const clicked = e.target 
        let projectsPage = document.getElementById("projects")
        let backingPage = document.getElementById("backedProjects")

        this.setState({ 
            currentPage: clicked.id 
        })

        if (clicked.id === "projects") {
            projectsPage.style.fontWeight = "bold"
            projectsPage.style.color = "green"
            backingPage.style.fontWeight = "normal"
            backingPage.style.color = "black"
        } else {
            backingPage.style.fontWeight = "bold"
            backingPage.style.color = "green"
            projectsPage.style.fontWeight = "normal"
            projectsPage.style.color = "black"
        }
        
    }

    render() {

        let projects = Object.values(this.props.projects) 
        let userProjects = []; 
        if (this.props.currentUser) {
            projects.forEach((project) => {
                if (project.author_id === this.props.currentUser) {
                    userProjects.push(project) 
                }
            })
        }

        let backings = Object.values(this.props.backings) 
        let userBackings = []; 
        if (this.props.currentUser) {
            backings.forEach((backing) => {
                if (backing.backer_id === this.props.currentUser) {
                    userBackings.push(backing) 
                }
            })
        }
         
        let backedProjects = []; 
        userBackings.forEach((back) => {
            let project = this.props.projects[back.project_id]
            if (!backedProjects.includes(project)) {
                backedProjects.push(project) 
            }
        })

        let bodyPage = this.state.currentPage === "projects" ? (
            <div className="profile-projects-outer">
                {(userProjects.length > 0) ? userProjects.map((project, i) => {
                    return (
                        <div key={i} className="profile-projects-container">
                            <div className="profile-projects-info">
                                <div className="profile-projects-photo">
                                    <Link to={`/projects/${project.id}`}>
                                        <img src={project.photo} />
                                    </Link>
                                </div>
                                <div className="profile-projects-title">
                                    <Link className="profile-projects-title-link" to={`/projects/${project.id}`}>
                                        {project.title}
                                    </Link>
                                </div>
                            </div>
                            <div className="profile-projects-edit">
                                <Link to={`/projects/${project.id}/edit`} className="profile-projects-edit-link">Edit Project</Link>
                            </div>
                        </div>
                    )
                }) : "You haven't started any projects yet"} 
            </div>
        ) : (
            <div className="profile-projects-outer">
                {(backedProjects.length > 0) ? backedProjects.map((project, j) => {
                    return (
                        <div key={j} className="profile-backed-container">
                            <div className="profile-projects-photo">
                                <Link to={`/projects/${project.id}`}>
                                    <img src={project.photo} />
                                </Link>
                            </div>
                            <div className="profile-projects-title">
                                <Link className="profile-projects-title-link" to={`/projects/${project.id}`}>
                                    {project.title}
                                </Link>
                            </div>
                        </div>
                    )
                }) : "You haven't backed any projects yet"}
            </div>
        )

        return (
            <div>
                <div className="profile-header">
                    <h1>Hello, {this.props.users[this.props.currentUser].name}</h1>
                </div>
                <div className="option-links">
                    <div className="toggle-each" id="projects" onClick={this.handleClick}>Your Projects</div>
                    <div className="toggle-each" id="backedProjects" onClick={this.handleClick}>Your Backed Projects</div>
                </div>
                <div>
                    {bodyPage}
                </div>
            </div>
        )
    }
}

export default Profile; 