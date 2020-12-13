import { connect } from 'react-redux';
import ProjectIndex from './project_index'; 
import { fetchProjects } from '../../actions/project_actions';


const mapStateToProps = (state) => {
    const projects = Object.values(state.entities.projects); 
    let index = Math.floor(Math.random() * projects.length)
    return {
        projects: projects,
        project: projects[index]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);