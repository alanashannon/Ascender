import React from 'react'; 

class SessionForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: "", 
            password: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const user = Object.assign({}, this.state);
        this.props.processForm(user); 
        this.setState({
            email: '', 
            password: ''
        })
    };

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                    </label>
                    <br/>
                    <label>Password 
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                    </label>
                    <br/>
                    <input type="submit" value={this.props.formType}/>
                    <br/>
                    New to Flying Start? {this.props.link}
                </form>
            </div>
        )
    }
}

export default SessionForm; 

