import React from 'react'; 
import { Link } from 'react-router-dom'; 

// section for featured - separate file? 
    // link to project show page
    // photo, title, description/campaign, author name
class FeaturedProject extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
        // let projectExists; 
        // (this.props.project) ? projectExists = this.props.project : projectExists = null; 
        
        if (!this.props.project) {
            return null; 
        }

        //for progress bar under pic
        let percentFunded = Math.floor((this.props.project.amount_pledged / this.props.project.funding_goal) * 100)
        if (percentFunded > 100) {
            percentFunded = 100
        }

        return (
            !this.props.project ? <div></div> : (
            <div className="featured-project-inner">
                <Link to={`/projects/${this.props.project.id}`}>
                    <img className="featured-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bernese_Mountain_Dog.jpg/1200px-Bernese_Mountain_Dog.jpg" alt="puppy" />
                    <div className="featured-progress-bar" style={{width: `calc(1% * ${percentFunded})`}}></div>
                </Link>
                <ul>
                    <li className="featured-info">
                        <div className="featured-title">
                            <Link className="featured-title-text" to={`/projects/${this.props.project.id}`}>
                                {this.props.project.title}
                            </Link>
                        </div>
                        <div className="featured-camp">
                            <Link className="featured-camp-text" to={`/projects/${this.props.project.id}`}>
                                {this.props.project.campaign}
                            </Link>
                        </div>
                        <div className="featured-author">By&nbsp; 
                            <Link className="featured-author-text" to={`/projects/${this.props.project.id}`}>
                                {this.props.project.author_id}
                            </Link>
                        </div>
                    </li>
                </ul>
            </div> 
            )
        )
    }


}

export default FeaturedProject; 