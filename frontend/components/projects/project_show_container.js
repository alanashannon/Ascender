import { connect } from 'react-redux'; 
import ProjectShow from './project_show';
import { withRouter } from 'react-router-dom';
import { fetchProject, deleteProject, updateProject } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId], 
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProject: () => dispatch(fetchProject(ownProps.match.params.projectId)),
        deleteProject: (projectId) => dispatch(deleteProject(projectId)),
        updateProject: (project) => dispatch(updateProject(project))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectShow)); 