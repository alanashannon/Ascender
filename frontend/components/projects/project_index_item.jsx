import React from 'react'; 
import { Link } from 'react-router-dom'; 

class ProjectIndexItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
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
                        <img className="recommended-pic" src={this.props.project.photo} alt="photo"/>
                    </Link>
                    <ul className="recommended-list">
                        <li>
                            <Link className="recommended-title" to={`/projects/${this.props.project.id}`}>
                                {this.props.project.title}
                            </Link>
                            <br />
                            <div className="rec-percent-funded">{percentFunded}% funded</div>
                            <div className="rec-author-outer">
                                By&nbsp; 
                                <Link className="recommended-author" to={`/projects/${this.props.project.id}`}>
                                    {this.props.project.authorName}
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