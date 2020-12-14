import React from 'react'; 
import ProjectCreate from './project_create';

//page2: funding header, funding goal, risks, link to next
class FormPage2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.state.title,
            category: this.state.category,
            location: this.state.location,
            endDate: this.state.endDate,
            fundingGoal: "",
            risks: "",
            formPage: 2
        }

        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.setState({ formPage: 3 })
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Let's talk about money</h1>
                    <h2>Plan and manage your project's finances</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Funding goal</h3>
                    <h4>Set an achievable goal that covers what you need to complete your project</h4>
                    <label>Goal amount
                        <input type="number" value={this.state.fundingGoal} required={true} onChange={this.handleInput("fundingGoal")}/>
                    </label>

                    <h3>Risks and challenges</h3>
                    <h4>Be honest about the potential risks and challenges of this project and how you plan to overcome them to complete it</h4>
                    <textarea cols="50" rows="3" onChange={this.handleInput("risks")}></textarea>

                    <input type="submit" value="Next: Story"/>
                </form>
            </div>
        )
    }

}

export default FormPage2; 