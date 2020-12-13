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
                <div className="recommended-block">
                    <Link to={`/projects/${this.props.project.id}`}>
                        <img className="recommended-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bernese_Mountain_Dog.jpg/1200px-Bernese_Mountain_Dog.jpg" alt="puppy"/>
                    </Link>
                    <ul className="recommended-list">
                        <li>
                            <Link className="recommended-title" to={`/projects/${this.props.project.id}`}>
                                {this.props.project.title}
                            </Link>
                            <br />
                            <div className="rec-percent-funded">{percentFunded}% funded</div>
                            <div className="rec-author-outer">
                                By 
                                <Link className="recommended-author" to={`/projects/${this.props.project.id}`}>
                                    {this.props.project.author_id}
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default ProjectIndexItem; 