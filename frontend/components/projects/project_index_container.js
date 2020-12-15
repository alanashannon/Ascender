import { connect } from 'react-redux';
import ProjectIndex from './project_index'; 
import { fetchProjects } from '../../actions/project_actions';

const projectWithAuthor = (state) => {
    return Object.values(state.entities.projects).map((project) => {
        let author = state.entities.projects["users"][project.author_id]
        if (project.id !== undefined) {
            return Object.assign({}, project, {authorName: author.name})
        }
    })
}

const mapStateToProps = (state) => {
    const projects = Object.values(state.entities.projects); 
    let index = Math.floor(Math.random() * projects.length)
    return {
        projects: projectWithAuthor(state),
        project: projectWithAuthor(state)[index]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);