import React from 'react'; 

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

        let daysLeft = !projectExists ? null : (date) => {
            let today = new Date(); 
            let ending_date = new Date(date); 
            let time_diff = ending_date.getTime() - today.getTime(); //result in milliseconds
            return Math.floor(time_diff / (86400000)) //convert to days from milliseconds, rounded down 
        }
        let daysCounter = !daysLeft ? null : daysLeft(this.props.project.end_date) < 0 ? "0" : daysLeft(this.props.project.end_date).toString(); 

        let optionsButton = !projectExists ? null : (this.props.project.author_id === this.props.currentUser) ? 
            <button>Delete This Project</button> : <button>Back This Project</button>

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
        

        return (
            !projectExists ? <div></div> : (
                <div>
                    <div className="project-show-header">
                        <h1>{this.props.project.title}</h1>
                        <h2>{this.props.project.description}</h2>
                    </div>
                    <div className="project-show-mid">
                        <section>
                            photo goes here 
                        </section>
                        <div>
                            progress bar goes here 
                        </div>
                        <ul>
                            <li>
                                ${this.props.project.amount_pledged}
                            </li>
                            <li>
                                pledged of {this.props.project.funding_goal}
                            </li>
                            <li>
                                number of backers goes here 
                                <br/>
                                backers 
                            </li>
                            <li>
                                {daysCounter}
                                <br/>
                                days to go
                            </li>
                        </ul>
                        {optionsButton}
                    </div>
                    <div>
                        <div onClick={this.handleClick("campaign")}>Campaign</div>
                        <div onClick={this.handleClick("faq")}>FAQ</div>
                        <div onClick={this.handleClick("updates")}>Updates</div>
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