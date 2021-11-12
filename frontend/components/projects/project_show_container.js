import { connect } from 'react-redux'; 
import ProjectShow from './project_show';
import { withRouter } from 'react-router-dom';
import { fetchProject, deleteProject, updateProject, fetchUsers } from '../../actions/project_actions';
import { fetchRewards, createReward, fetchReward, updateReward, deleteReward } from '../../actions/reward_actions'; 
import { fetchBackings, createBacking } from '../../actions/backing_actions';
import { fetchCategories } from '../../actions/categories_actions'; 

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        currentUser: state.session.id, 
        users: state.entities.users, 
        rewards: state.entities.rewards, 
        backings: Object.values(state.entities.backings), 
        categories: Object.values(state.entities.categories)
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProject: () => dispatch(fetchProject(ownProps.match.params.projectId)),
        deleteProject: (projectId) => dispatch(deleteProject(projectId)),
        updateProject: (project) => dispatch(updateProject(project)),
        fetchUsers: () => dispatch(fetchUsers()), 
        fetchRewards: () => dispatch(fetchRewards()), 
        fetchBackings: () => dispatch(fetchBackings()), 
        createBacking: (backing) => dispatch(createBacking(backing)), 
        fetchCategories: () => dispatch(fetchCategories())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectShow)); 