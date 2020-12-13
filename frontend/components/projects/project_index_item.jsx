import React from 'react'; 
import { Link } from 'react-router-dom'; 

class ProjectIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    // check if project is in featured or recommended
    // if in featured, display photo, title, description, author
    // if in recommended, display photo, title, percent funded, author
    render() {
        if (!this.props.project) {
            return null; 
        }

        let percentFunded = Math.floor((this.props.project.amount_pledged / this.props.project.funding_goal) * 100)
        if (percentFunded > 100) {
            percentFunded = 100
        }

        return (
            <div>
                <Link to={`/projects/${this.props.project.id}`}>
                    photo goes here 
                </Link>
                <ul>
                    <li>
                        <Link to={`/projects/${this.props.project.id}`}>
                            {this.props.project.title}
                        </Link>
                        <br />
                        <Link to={`/projects/${this.props.project.id}`}>
                            {this.props.project.campaign}
                        </Link>
                        <div>{percentFunded}% funded</div>
                        {/* <br /> */}
                        <Link to={`/projects/${this.props.project.id}`}>
                            {this.props.project.author_id}
                        </Link>
                    </li>
                </ul>
            </div>

        )
    }
}

export default ProjectIndexItem; 