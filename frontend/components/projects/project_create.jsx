import React from 'react'; 

class ProjectCreate extends React.Component {
    constructor(props) {
        super(props)
    }

    

    render () {
        if (!this.props.project) {
            return null; 
        }

        return (
            <div>
                <h1>Project Create</h1>
            </div>
        )
    }
}

export default ProjectCreate; 