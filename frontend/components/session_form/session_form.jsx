import React from 'react'; 

class SessionForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            email: "", 
            password: "",
            errors: []
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
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
        })
    };

    handleDemoSubmit(e) {
        e.preventDefault(); 

        let demoEmail = 'demo@user.com';
        let demoPassword = 'password'
        // const demoUser = Object.assign({}, demoEmail, demo)
        // this.props.processForm(demoUser); 
        this.setState({
            email: '',
            password: ''
        },
        () => this.demoUser(demoEmail, demoPassword))
    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput('email')}/>
                    <br/> 
                    <input type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')}/>
                    <br/>
                    {this.renderErrors()}
                    <input type="submit" value={this.props.formType}/>
                    <br/>
                    <input type="submit" value="Demo Login" onClick={this.handleDemoSubmit}/>
                    <br/>
                    New to Flying Start? {this.props.link}
                </form>
            </div>
        )
    }
}

export default SessionForm; 

