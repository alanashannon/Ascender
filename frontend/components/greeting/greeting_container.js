import { connect } from 'react-redux'; 
import Greeting from './greeting';
import { logout } from '../../actions/session_actions';
import { fetchProjects } from '../../actions/project_actions'

const mapStateToProps = ({ session, entities: { users, projects } }) => {
    return {
        currentUser: users[session.id],
        users: users, 
        projects: projects
    }
};

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting)