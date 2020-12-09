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
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>{this.props.formType}</h2>
                    <label>Name
                        <input type="text" value={this.state.name} onChange={this.handleInput('name')} />
                    </label>
                    <br />
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>
                    <br />
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <br />
                    {this.renderErrors()}
                    <input type="submit" value={this.props.formType} />
                    <br />
                    Have an account? {this.props.link}
                </form>
            </div>
        )
    }
}

export default SignupForm; 