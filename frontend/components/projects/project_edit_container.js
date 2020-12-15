import { connect } from 'react-redux';
import ProjectEdit from './project_edit';
import { fetchProject, updateProject, deleteProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        currentUser: state.entities.users[state.session.id],
        formType: "Edit This Project"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: projectId => dispatch(fetchProject(projectId)),
        updateProject: project => dispatch(updateProject(project)),
        deleteProject: projectId => dispatch(deleteProject(projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectEdit);