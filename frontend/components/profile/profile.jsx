import React from 'react'; 
import { Link } from 'react-router-dom'; 

class Profile extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            page: "projects", 
        }
    }

    componentDidMount() {
        this.props.fetchProjects(); 
        this.props.fetchBackings(); 
        this.props.fetchUsers(); 
    }

    handleClick(page) {
        return () => {
            this.setState({ page: page})
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
        console.log(backedProjects)

        let bodyPage = this.state.page === "projects" ? (
            <div>
                {(userProjects.length > 0) ? userProjects.map((project, i) => {
                    return (
                        <div key={i} className="profile-projects-container">
                            <div className="profile-projects-photo">
                                <Link to={`/projects/${project.id}`}>
                                    <img src={project.photo} />
                                </Link>
                            </div>
                            <div className="project-search-title">
                                <Link className="project-search-title" to={`/projects/${project.id}`}>
                                    {project.title}
                                </Link>
                            </div>
                            <div>
                                <Link to={`/projects/${project.id}/edit`}>Edit Project</Link>
                            </div>
                        </div>
                    )
                }) : "You haven't started any projects yet"} 
            </div>
        ) : (
            <div>
                {(backedProjects.length > 0) ? backedProjects.map((project, j) => {
                    return (
                        <div key={j} className="profile-projects-container">
                            <div className="profile-projects-photo">
                                <Link to={`/projects/${project.id}`}>
                                    <img src={project.photo} />
                                </Link>
                            </div>
                            <div className="project-search-title">
                                <Link className="project-search-title" to={`/projects/${project.id}`}>
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
                    <div onClick={this.handleClick("projects")}>Your Projects</div>
                    <div onClick={this.handleClick("backedProjects")}>Your Backed Projects</div>
                </div>
                <div>
                    {bodyPage}
                </div>
            </div>
        )
    }
}

export default Profile; 