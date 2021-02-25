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
        this.props.fetchProject(this.props.match.params.projectId);
        this.props.fetchUsers();
        this.props.fetchRewards(); 
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
            
        let rewardsArr = []; 
        this.props.rewards.forEach((rew) => {
            if (rew.project_id === this.props.project.id) {
                rewardsArr.push(rew)
            }
        })

        let bodyPage = !projectExists ? null : this.state.bodyPage === "campaign" ? (
            <div className="show-campaign">
                <section className="project-show-body">
                    <div className="project-show-sidebar">
                        <h2>Story</h2>
                        <h2>Risks</h2>
                    </div>
                    <div className="project-show-info">
                        <h3>Story</h3>
                        <p>{this.props.project.campaign}</p>
                        <h3>Risks and Challenges</h3>
                        <p>{this.props.project.risks}</p>
                    </div>
                    <div className="right-side-info">
                        <div className="author-info">
                            <div className="author-name">
                                {this.props.users[this.props.project.author_id].name}
                            </div>
                            <div className="author-location">
                                {this.props.users[this.props.project.author_id].location}
                            </div>
                            <div className="author-bio">
                                {this.props.users[this.props.project.author_id].biography}
                            </div>
                        </div>
                        <div className="reward-info">
                            <h3>Support</h3>
                            <div className="pledge-no-reward">
                                <div className="reward-header">Pledge without a reward</div>
                                <form>
                                    <div className="pledge-input">
                                        <span>$</span>
                                        <input placeholder="Pledge any amount"/>
                                    </div>
                                    <div className="no-reward-p">
                                        <p className="no-reward-p1">Back it because you believe in it.</p>
                                        <p className="no-reward-p2">Support the project for no reward, just because it speaks to you.</p>
                                    </div>
                                    <input className="backing-submit" type="submit" value="Continue"/>
                                </form>
                            </div>
                            <div>
                                {rewardsArr.map((reward, i) => {
                                    return (
                                        <div key={i} className="reward-each">
                                            <div className="reward-header">
                                                Pledge ${reward.pledge_amount} or more
                                            </div>
                                            <div className="reward-title">
                                                {reward.title}
                                            </div>
                                            <div className="reward-description">
                                                {reward.description}
                                            </div>
                                            <div className="reward-est-delivery">
                                                Estimated delivery <br /> {reward.est_delivery}
                                            </div>
                                            <div className="reward-ships-to">
                                                Ships to <br /> {reward.ships_to}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div> ) : this.state.bodyPage === "faq" ? (
                <div className="show-faq">
                    <h3>Frequently Asked Questions</h3>
                    {this.props.project.faq ? (
                    <p>{this.props.project.faq}</p>) :
                    <p>Looks like there aren't any frequently asked questions yet.</p>}
                </div>
            ) : <div className="show-updates">
                    <h3>Updates</h3>
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
                            <img src={this.props.project.photo} /> 
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
                    <div className="show-bodypage">
                        {bodyPage}
                    </div>
                    
                </div>
            )
        )
    }
}

export default ProjectShow; 