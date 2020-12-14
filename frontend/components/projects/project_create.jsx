import React from 'react'; 

class ProjectCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.project

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        
        this.props.createProject(this.state)
    }

    render () {
        if (!this.props.project) {
            return null; 
        }

        return (
            <div>
                <div>
                    <h1>Start with the basics</h1>
                    <h2>Make it easy for people to learn about your project</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Project title</h3>
                    <h4>Write a clear, brief title that helps people quicky understand the gist of your project</h4>
                    <label>Title
                        <input type="text" value={this.state.title} required={true} onChange={this.handleInput("title")} placeholder="Chamber Music Concert at the DeYoung Museum"/>
                    </label>

                    <h3>Project category</h3>
                    <h4>Choose the category that most closely aligns with your project</h4>
                    <label>Category 
                        <select value={this.state.category} onChange={this.handleInput("category")} required={true}>
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
                    <input type="text" value={this.state.location} required={true} onChange={this.handleInput("location")} placeholder="Enter a location"/>

                    <h3>Project image</h3>
                    <h4>Add an image that clearly represents your project</h4>
                    {/* <input type="file"/> */}

                    <h3>Project end date</h3>
                    <h4>Set a time limit for your campaign. You won't be able to change this after you launch</h4>
                    <input type="date" value={this.state.endDate} required={true} onChange={this.handleInput("endDate")}/>

                    <div>
                        <h1>Let's talk about money</h1>
                        <h2>Plan and manage your project's finances</h2>
                    </div>

                    <h3>Funding goal</h3>
                    <h4>Set an achievable goal that covers what you need to complete your project</h4>
                    <label>Goal amount
                        <input type="number" value={this.state.fundingGoal} required={true} onChange={this.handleInput("fundingGoal")} />
                    </label>

                    <h3>Risks and challenges</h3>
                    <h4>Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it</h4>
                    <textarea cols="50" rows="3" required={true} onChange={this.handleInput("risks")}></textarea>

                    <div>
                        <h1>Introduce your project</h1>
                        <h2>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are</h2>
                    </div>

                    <h3>Project description</h3>
                    <h4>Tell people why they should be excited about your project. Get specific but be clear and be brief</h4>
                    <textarea cols="50" rows="3" required={true} onChange={this.handleInput("description")}></textarea>

                    <h3>Campaign</h3>
                    <h4>Write about your project like you're explaining it to a friend</h4>
                    <textarea cols="50" rows="10" required={true} onChange={this.handleInput("campaign")}></textarea>

                    <br/>
                    <input type="submit" value="Create Your Project"/>
                </form>

            </div>
        )
    }
}

export default ProjectCreate; 
