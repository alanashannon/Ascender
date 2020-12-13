import React from 'react'; 

class ProjectCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "", 
            category: "",
            location: "",
            endDate: "",
            formPage: 1
        }
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
        this.setState({ formPage: 2 })
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
                        <select required={true}>
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

                    <br/>
                    <button>Next: Funding</button>
                </form>

            </div>
        )
    }
}

export default ProjectCreate; 

//this page: basics header, category dropdown, title, location, pic upload, end date (calendar select), link to next page
//page2: funding header, funding goal, risks, link to next
//page3: campaign, description, submit