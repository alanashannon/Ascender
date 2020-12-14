import React from 'react'; 
import ProjectIndexContainer from './project_index_container';

class ProjectEdit extends React.Component {
    constructor(props) {
        super(props)
        // this.state = this.props.project
        this.state = {
            title: '',
            category: '',
            description: '',
            campaign: '',
            location: '',
            fundingGoal: '',
            // endDate: '',
            risks: '',
        }

        this.handleInput.bind(this)
        this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 

        if (!this.props.currentUser) {
            this.props.history.push('/login')
        }

        // let newTitle = this.props.project.title;
        // let newCategory = this.props.project.category;
        // let newLocation = this.props.project.Location;
        // let newFundingGoal = this.props.project.fundingGoal;
        // let newRisks = this.props.project.risks;
        // let newDescription = this.props.project.description;
        // let newCampaign = this.props.project.campaign;

        if (this.state.location !== false) {
            let newLocation = this.state.location
        } else {
            let newLocation = this.props.project.location
        }
        // (this.state.title) ? newTitle = this.state.title : newTitle = this.props.project.title
        // (this.state.category) ? newCategory = this.state.category : newCategory = this.props.project.category
        // (this.state.location) ? newLocation = this.state.location : newLocation = this.props.project.location
        // (this.state.fundingGoal) ? newFundingGoal = this.state.fundingGoal : newFundingGoal = this.props.project.fundingGoal
        // (this.state.risks) ? newRisks = this.state.risks : newRisks = this.props.project.risks
        // (this.state.description) ? newDescription = this.state.description : newDescription = this.props.project.description
        // (this.state.campaign) ? newCampaign = this.state.campaign : newCampaign = this.props.project.campaign

        const projectUpdates = {
            // id: this.props.project.id,
            // title: newTitle,
            // category: newCategory,
            location: newLocation,
            // fundingGoal: newFundingGoal,
            // risks: newRisks, 
            // description: newDescription,
            // campaign: newCampaign
        }

        this.props.updateProject(projectUpdates)
        //     .then(() => this.props.history.push(`/projects/${this.props.project.id}`))
    }

    render () {
        if (!this.props.project) {
            return <div></div> 
        }

        if (this.props.project.author_id !== this.props.currentUser.id) {
            this.props.history.push('/')
        }

        return (
            <div>
                <div>
                    <h1>Edit Your Project</h1>
                    <h2>Make it easy for people to learn about your project</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Project title</h3>
                    <h4>Write a clear, brief title that helps people quicky understand the gist of your project</h4>
                    <label>Title
                        <input type="text" value={this.state.title} onChange={this.handleInput("title")} placeholder={this.props.project.title} />
                    </label>

                    <h3>Project category</h3>
                    <h4>Choose the category that most closely aligns with your project</h4>
                    <label>Category
                        <select value={this.state.category} onChange={this.handleInput("category")} placeholder={this.props.project.category}>
                            <option value="">Select your category</option>
                            <option value="Art">Art</option>
                            <option value="Comics & Illustration">Comics & Illustration</option>
                            <option value="Design & Tech">Design & Tech</option>
                            <option value="Film">Film</option>
                            <option value="Food & Craft">Food & Craft</option>
                            <option value="Games">Games</option>
                            <option value="Music">Music</option>
                            <option value="Publishing">Publishing</option>
                        </select>
                    </label>

                    <h3>Project location</h3>
                    <h4>Enter the location that best describes where your project is based</h4>
                    <input type="text" value={this.state.location} onChange={this.handleInput("location")} placeholder={this.props.project.location} />

                    <h3>Project image</h3>
                    <h4>Add an image that clearly represents your project</h4>
                    {/* <input type="file"/> */}

                    {/* <h3>Project end date</h3>
                    <h4>Set a time limit for your campaign. You won't be able to change this after you launch</h4>
                    <input type="date" value={this.state.endDate} onChange={this.handleInput("endDate")} /> */}

                    <div>
                        <h1>Let's talk about money</h1>
                        <h2>Plan and manage your project's finances</h2>
                    </div>

                    <h3>Funding goal</h3>
                    <h4>Set an achievable goal that covers what you need to complete your project</h4>
                    <label>Goal amount
                        <input type="number" value={this.state.fundingGoal} onChange={this.handleInput("fundingGoal")} placeholder={this.props.project.fundingGoal}/>
                    </label>

                    <h3>Risks and challenges</h3>
                    <h4>Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it</h4>
                    <textarea cols="50" rows="3" onChange={this.handleInput("risks")} placeholder={this.props.project.risks}></textarea>

                    <div>
                        <h1>Introduce your project</h1>
                        <h2>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are</h2>
                    </div>

                    <h3>Project description</h3>
                    <h4>Tell people why they should be excited about your project. Get specific but be clear and be brief</h4>
                    <textarea cols="50" rows="3" onChange={this.handleInput("description")} placeholder={this.props.project.description} ></textarea>

                    <h3>Campaign</h3>
                    <h4>Write about your project like you're explaining it to a friend</h4>
                    <textarea cols="50" rows="10" onChange={this.handleInput("campaign")} placeholder={this.props.project.campaign} ></textarea>

                    <br />
                    <input type="submit" value="Update Project" />
                </form>

            </div>
        )
    }
}

export default ProjectEdit; 