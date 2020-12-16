import React from 'react'; 
import { Redirect } from 'react-router-dom';

class ProjectCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.project

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value})
        }
    }

    handleFile(e) {
        // this.setState({ photoFile: null })
        const file = e.currentTarget.files[0]; 
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState({ photoUrl: reader.result, photoFile: file });
        }

        if (file) {
            reader.readAsDataURL(file); 
        } 
        // else {
        //     this.setState({ photoUrl: "", photoFile: null })
        // }
    }

    handleSubmit(e) {
        e.preventDefault(); 

        const formData = new FormData(); 
        formData.append('project[title]', this.state.title); 
        formData.append('project[category]', this.state.category);
        formData.append('project[location]', this.state.location);
        formData.append('project[end_date]', this.state.end_date);
        formData.append('project[funding_goal]', this.state.funding_goal);
        formData.append('project[risks]', this.state.risks);
        formData.append('project[description]', this.state.description);
        formData.append('project[campaign]', this.state.campaign);
        
        if (this.state.photoFile) {
            formData.append('project[photo]', this.state.photoFile);
        }

        this.props.createProject(formData)
            .then(() => this.props.history.push(`/projects/${this.state.id}`))
    }

    render () {
        if (!this.props.project) {
            return null; 
        }

        return (
            <div>
                <div className="form-header">
                    <div className="form-header-text">
                        <h1>Start with the basics</h1>
                        <h2>Make it easy for people to learn about your project</h2>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="title">
                        <div className="title-info">
                            <h3>Project title</h3>
                            <h4>Write a clear, brief title that helps people quicky understand the gist of your project</h4>
                        </div>
                        <div className="title-input">
                            <label>Title <br/>
                                <input type="text" value={this.state.title} required={true} onChange={this.handleInput("title")} placeholder="Ex: Chamber Music Concert at the DeYoung Museum"/>
                            </label>
                        </div>
                    </div>
                    <div className="category">
                        <div className="category-info">
                            <h3>Project category</h3>
                            <h4>Choose the category that most closely aligns with your project</h4>
                        </div>
                        <div className="category-input">
                            <label>Category <br/>
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
                        </div>
                    </div>
                    <div className="location">
                        <div className="location-info">
                            <h3>Project location</h3>
                            <h4>Enter the location that best describes where your project is based</h4>
                        </div>
                        <div className="location-input">
                            <input type="text" value={this.state.location} required={true} onChange={this.handleInput("location")} placeholder="Enter a location"/>
                        </div>
                    </div>
                    <div className="image">
                        <div className="image-info">
                            <h3>Project image</h3>
                            <h4>Add an image that clearly represents your project</h4>
                        </div>
                        <div className="image-input">
                            <input type="file" onChange={this.handleFile.bind(this)}/>
                        </div>
                    </div>
                    <div className="enddate">
                        <div className="enddate-info">
                            <h3>Project end date</h3>
                            <h4>Set a time limit for your campaign. You won't be able to change this after you launch</h4>
                        </div>
                        <div className="enddate-input">
                            <input type="date" value={this.state.end_date} required={true} onChange={this.handleInput("end_date")}/>
                        </div>
                    </div>

                    <div className="funding-header">
                        <div className="funding-header-text">
                            <h1>Let's talk about money</h1>
                            <h2>Plan and manage your project's finances</h2>
                        </div>
                    </div>
                    <div className="goal">
                        <div className="goal-info">
                            <h3>Funding goal</h3>
                            <h4>Set an achievable goal that covers what you need to complete your project</h4>
                        </div>
                        <div className="goal-input">
                            <label>Goal amount
                                <input type="number" value={this.state.funding_goal} required={true} onChange={this.handleInput("funding_goal")} />
                            </label>
                        </div>
                    </div>
                    <div className="risks">
                        <div className="risks-info">
                            <h3>Risks and challenges</h3>
                            <h4>Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it</h4>
                        </div>
                        <div className="risks-input">
                            <textarea cols="50" rows="3" required={true} onChange={this.handleInput("risks")}></textarea>
                        </div>
                    </div>

                    <div className="story-header">
                        <div className="story-header-text">
                            <h1>Introduce your project</h1>
                            <h2>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are</h2>
                        </div>
                    </div>
                    <div className="description">
                        <div className="description-info">
                            <h3>Project description</h3>
                            <h4>Tell people why they should be excited about your project. Get specific but be clear and be brief</h4>
                        </div>
                        <div className="description-input">
                            <textarea cols="50" rows="3" required={true} onChange={this.handleInput("description")}></textarea>
                        </div>
                    </div>
                    <div className="campaign">
                        <div className="campaign-info">
                            <h3>Campaign</h3>
                            <h4>Write about your project like you're explaining it to a friend</h4>
                        </div>
                        <div className="campaign-input">
                            <textarea cols="50" rows="10" required={true} onChange={this.handleInput("campaign")}></textarea>
                        </div>
                    </div>

                    <br/>
                    <div className="update-button">
                        <input className="submit-button" type="submit" value="Create Your Project"/>
                    </div>
                </form>

            </div>
        )
    }
}

export default ProjectCreate; 
