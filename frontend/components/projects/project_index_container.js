import { connect } from 'react-redux';
import ProjectIndex from './project_index'; 
import { fetchProjects, fetchUsers } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/categories_actions';


const projectWithAuthor = (state) => {
    return Object.values(state.entities.projects).map((project) => {
        let author = state.entities.users[project.author_id]

        if ((project.id !== undefined) && (author !== undefined)) {   
            return Object.assign({}, project, {authorName: author.name})
        }
    })
}

const mapStateToProps = (state) => {
    const projects = Object.values(state.entities.projects); 
    let index = Math.floor(Math.random() * projects.length)
    return {
        projects: projectWithAuthor(state),
        project: projectWithAuthor(state)[index], 
        users: state.entities.users, 
        categories: state.entities.categories
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        fetchUsers: () => dispatch(fetchUsers()), 
        fetchCategories: () => dispatch(fetchCategories())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);