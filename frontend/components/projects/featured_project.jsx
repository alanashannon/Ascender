import React from 'react'; 
import { Link } from 'react-router-dom'; 

// section for featured - separate file? 
    // link to project show page
    // photo, title, description/campaign, author name
class FeaturedProject extends React.Component {

    render () {
        let projectCheck; 
        (this.props.project) ? projectCheck = this.props.project : projectCheck = null; 

        //for progress bar under pic
        // let percentFunded = Math.floor((this.props.project.amount_pledged / this.props.project.funding_goal) * 100)
        // if (percentFunded > 100) {
        //     percentFunded = 100
        // }

        return (
            !projectCheck ? <div></div> : (
            <div>
                <Link to={`/projects/${this.props.project.id}`}>
                    featured photo
                </Link>
                <Link to={`/projects/${this.props.project.id}`}>
                    <li>
                        {this.props.project.title}
                    </li>
                    <li>
                        {this.props.project.campaign}
                    </li>
                    <li>
                        By <div>{this.props.project.author_id}</div>
                    </li>

                </Link>
            </div> 
            )
        )
    }


}

export default FeaturedProject; 