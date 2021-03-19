import React from 'react'; 
import { Link } from 'react-router-dom'; 

class Profile extends React.Component {
    constructor(props) {
        super(props) 
    }

    componentDidMount() {
        this.props.fetchProjects(); 
        this.props.fetchBackings(); 
    }

    render() {
        return (
            <div>
                <h1>Profile page</h1>
            </div>
        )
    }
}

export default Profile; 