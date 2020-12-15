import React from 'react'; 
import { Link } from 'react-router-dom';

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bodyPage: "campaign",
            subSection: "story", 
            amountPledged: 0
        }
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }

    handleClick(page) {
        return (e) => {
            this.setState({bodyPage: page})
        }
    }

    render() {
        let projectExists;
        (this.props.project) ? projectExists = this.props.project : projectExists = null; 
        
        if (!this.props.project) {
            return null;
        }

        let daysLeft = !projectExists ? null : (date) => {
            let today = new Date(); 
            let ending_date = new Date(date); 
            let time_diff = ending_date.getTime() - today.getTime(); //result in milliseconds
            return Math.floor(time_diff / (86400000)) //convert to days from milliseconds, rounded down 
        }
        let daysCounter = !daysLeft ? null : daysLeft(this.props.project.end_date) < 0 ? "0" : daysLeft(this.props.project.end_date).toString(); 
    
        let optionsButton = !projectExists ? null : (this.props.project.author_id === this.props.currentUser) ? 
            <Link className="options-button" to={`/projects/${this.props.project.id}/edit`}>Edit This Project</Link> : <input className="options-button" type="submit" value="Back This Project" />
            
        let bodyPage = !projectExists ? null : this.state.bodyPage === "campaign" ? (
            <div className="show-campaign">
                <section className="project-show-body">
                    <h2>Story</h2>
                    <p>{this.props.project.campaign}</p>
                    <h2>Risks</h2>
                    <p>{this.props.project.risks}</p>
                </section>
            </div> ) : this.state.bodyPage === "faq" ? (
                <div className="show-faq">
                    <h2>Frequently Asked Questions</h2>
                    {this.props.project.faq ? (
                    <p>{this.props.project.faq}</p>) :
                    <p>Looks like there aren't any frequently asked questions yet.</p>}
                </div>
            ) : <div className="show-updates">
                    <h2>Updates</h2>
                    {this.props.project.updates ? (
                    <p>{this.props.project.updates}</p>) :
                    <p>Looks like there aren't any updates yet.</p>}
            </div>

        let percentFunded = Math.floor((this.props.project.amount_pledged / this.props.project.funding_goal) * 100)
        if (percentFunded > 100) {
            percentFunded = 100
        }

        return (
            !projectExists ? <div></div> : (
                <div className="project-show-page">
                    <div className="project-show-header">
                        <h1>{this.props.project.title}</h1>
                        <h2>{this.props.project.description}</h2>
                    </div>
                    <div className="project-show-mid">
                        <section className="project-show-pic">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bernese_Mountain_Dog.jpg/1200px-Bernese_Mountain_Dog.jpg" alt="puppy" /> 
                        </section>
                        <div className="project-show-mid-info">
                            <div className="show-progress-bar" style={{ width: `calc(1% * ${percentFunded})` }}></div>
                            <ul className="project-show-mid-info-list">
                                <li className="show-amount-pledged">
                                    ${this.props.project.amount_pledged}
                                </li>
                                <li className="show-funding-goal">
                                    pledged of ${this.props.project.funding_goal}
                                </li>
                                <li className="show-backers">
                                    <div className="show-num-backers">
                                        number of backers 
                                    </div>
                                    <div className="show-funding-goal">
                                        backers 
                                    </div>
                                </li>
                                <li>
                                    <div className="show-num-backers">
                                        {daysCounter}
                                    </div>
                                    <div className="show-days">
                                        days to go
                                    </div>
                                </li>
                            </ul>
                            <div >
                                {optionsButton}
                            </div>
                        </div>

                    </div>
                    <div className="show-body">
                        <div className="show-option-links">
                            <div className="campaign-option" onClick={this.handleClick("campaign")}>Campaign</div>
                            <div className="faq-option" onClick={this.handleClick("faq")}>FAQ</div>
                            <div className="updates-option" onClick={this.handleClick("updates")}>Updates</div>
                        </div>
                    </div>
                        <div>
                            {bodyPage}
                        </div>
                    
                </div>
            )
        )
    }
}

export default ProjectShow; 