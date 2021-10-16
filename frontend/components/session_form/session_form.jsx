import React from 'react'; 

class SessionForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: "", 
            password: "",
            errors: []
        };

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this); 
    }

    componentDidMount() {
        this.props.clearErrors(); 
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
        this.setState({
            email: '', 
            password: ''
        });
    };

    handleDemoSubmit(e) {
        e.preventDefault(); 
        let demoUser = {
            email: 'demo@user.com', 
            password: 'password'
        };
        this.props.processForm(demoUser); 
    };

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value});
        }
    };

    renderErrors() {
        return (
            <div>
                {this.props.errors.map((error, i) => (
                    <div key={`error-${i}`}>
                        {error}
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div className="login-page">
                <form className="login-box" onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <input className="form-input" type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput('email')}/>
                    <br/> 
                    <input className="form-input" type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
                    <br/>
                    <div className="errors">
                        {this.renderErrors()}
                    </div>
                    <input className="submit-button" type="submit" value={this.props.formType}/>
                    <br/>
                    <input className="submit-button-demo" type="submit" value="Demo Login" onClick={this.handleDemoSubmit}/>
                    <br/>
                    <div className="login-footer">
                        New to Ascender? {this.props.link}
                    </div>
                </form>
            </div>
        )
    }
}

export default SessionForm; 

