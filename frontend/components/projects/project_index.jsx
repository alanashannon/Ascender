import React from 'react'; 
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';
import FeaturedProject from './featured_project';


class ProjectIndex extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.projects;
    }

    componentDidMount() {
        this.props.fetchProjects();  
    }

    render () {
        const recommendedProjects = this.props.projects.slice(4, 8)

        return (
            <div className="index-container">
                <section className="featured-project">
                    <div className="featured-header">Featured Project</div>
                    <FeaturedProject project={this.props.project} />
                </section>

                <section className="recommended-projects">
                    <div className="recommended-header">Recommended For You</div>
                    <ul>
                        {/* (shows all projects in a list) {this.props.projects.map((project, idx) => {
                            return <ProjectIndexItem project={project} key={idx} />
                        })} */} 
                        {recommendedProjects.map((project, idx) => {
                            return <ProjectIndexItem project={project} key={idx} />
                        })}
                        
                        <br />
                    </ul>
                </section>
            </div>
        )
    }
}

export default ProjectIndex; 