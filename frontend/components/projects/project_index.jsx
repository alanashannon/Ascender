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

    // section for featured - separate file? 
        // calculate percent funded
        // div for Featured Project header
        // link to project show page
            // photo, title, description/campaign, author name
    // section for recommended
        // div for Recommended For You header
        // ul for map through each project
    render () {
        return (
            <div>
                {/* <h1>Project Index</h1> */}

                <section className="featured-project">
                    <div>Featured Project</div>
                    <FeaturedProject project={this.props.project} />
                </section>

                <section className="recommended-projects">
                    <div>Recommended For You</div>
                    <ul>
                        {this.props.projects.map((project, idx) => {
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