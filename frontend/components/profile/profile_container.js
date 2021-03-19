import { connect } from 'react-redux'; 
import Profile from './profile'; 
import { fetchProjects, fetchUsers } from '../../actions/project_actions';
import { fetchBackings } from '../../actions/backing_actions';

const mapStateToProps = (state) => {
    return {
        projects: state.entities.projects, 
        backings: state.entities.backings, 
        currentUser: state.session.id, 
        users: state.entities.users
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects()), 
        fetchBackings: () => dispatch(fetchBackings()), 
        fetchUsers: () => dispatch(fetchUsers()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile); 