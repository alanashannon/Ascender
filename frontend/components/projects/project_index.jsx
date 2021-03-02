import React from 'react'; 
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import FeaturedProject from './featured_project';


class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProjects(); 
        this.props.fetchUsers();  
    }

    render () {
        const recommendedProjects = this.props.projects.slice(4, 8)

        return (
            <div>
                <div className="category-bar">
                    <ul>
                        <li>Arts</li>
                        <li>Comics & Illustration</li>
                        <li>Design & Tech</li>
                        <li>Film</li>
                        <li>Food & Craft</li>
                        <li>Games</li>
                        <li>Music</li>
                        <li>Publishing</li>
                    </ul>
                </div>
                <div className="index-container">
                    <section className="featured-project">
                        <div className="featured-header">Featured Project</div>
                        <FeaturedProject project={this.props.project} users={this.props.users} />
                    </section>

                    <section className="recommended-projects">
                        <div className="recommended-header">Recommended For You</div>
                        <ul>
                            {/* (shows all projects in a list) {this.props.projects.map((project, idx) => {
                                return <ProjectIndexItem project={project} key={idx} />
                            })} */} 
                            {recommendedProjects.map((project, idx) => {
                                return <ProjectIndexItem project={project} users={this.props.users}  key={idx} />
                            })}
                            
                            <br />
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default ProjectIndex; 