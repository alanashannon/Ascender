import React from 'react'; 

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
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
            name: '', 
            email: '', 
            password: ''
        })
    };

    handleInput(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

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
            <div className="signin-page">
                <form className="signin-box" onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <input className="form-input" type="text" value={this.state.name} placeholder="Name" onChange={this.handleInput('name')} />
                    <br />
                    <input className="form-input" type="text" value={this.state.email} placeholder="Email" onChange={this.handleInput('email')} />
                    <br />
                    <input className="form-input" type="password" value={this.state.password} placeholder="Password" onChange={this.handleInput('password')} />
                    <br />
                    <div className="errors">
                        {this.renderErrors()}
                    </div>
                    <input className="submit-button" type="submit" value={this.props.formType} />
                    <br />
                    Have an account? {this.props.link}
                </form>
            </div>
        )
    }
}

export default SignupForm; 