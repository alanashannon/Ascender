// import React from 'react';
// import ProjectCreate from './project_create';

// class FormPage3 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: this.state.title,
//             category: this.state.category,
//             location: this.state.location,
//             endDate: this.state.endDate,
//             fundingGoal: this.state.fundingGoal,
//             risks: this.state.risks,
//             description: "", 
//             campaign: "", 
//             formPage: 3
//         }

//         this.handleInput = this.handleInput.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }

//     handleInput(field) {
//         return (e) => {
//             this.setState({ [field]: e.currentTarget.value })
//         }
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         this.setState({ formPage: 3 })
//     }

//     render() {
//         return (
//             <div>
//                 <div>
//                     <h1>Introduce your project</h1>
//                     <h2>Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are</h2>
//                 </div>
                
//                 <form onSubmit={this.handleSubmit}>
//                     <h3>Project description</h3>
//                     <h4>Tell people why they should be excited about your project. Get specific but be clear and be brief</h4>
//                     <textarea cols="50" rows="3" onChange={this.handleInput("description")}></textarea>
        
//                     <h3>Campaign</h3>
//                     <h4>Write about your project like you're explaining it to a friend</h4>
//                     <textarea cols="50" rows="10" onChange={this.handleInput("campaign")}></textarea>

//                     <input type="submit" value="Submit project" />
//                 </form>
//             </div>
//         )
//     }

// }

// export default FormPage3; 