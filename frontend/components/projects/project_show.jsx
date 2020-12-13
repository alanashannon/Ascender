import React from 'react'; 

class ProjectShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }

    render() {
        let projectExists;
        (this.props.project) ? projectExists = this.props.project : projectExists = null; 

        let daysLeft = !projectExists ? null : (date) => {
            let today = new Date(); 
            let ending_date = new Date(date); 
            let time_diff = ending_date.getTime() - today.getTime();
            return Math.ceil(time_diff / (86400000)) //convert to days from milliseconds, rounded up 
        }
        let daysCounter = !daysLeft ? null : daysLeft(this.props.project.end_date) < 0 ? "0" : daysLeft(this.props.project.end_date).toString(); 

        let optionsButton = !projectExists ? null : (this.props.project.author_id === this.props.currentUser) ? 
            <button>Delete This Project</button> : <button>Back This Project</button>

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
                </div>

            )
        )
    }
}

export default ProjectShow; 