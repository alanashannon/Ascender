import { connect } from 'react-redux'; 
import Profile from './profile'; 
import { fetchProjects } from '../../actions/project_actions';
import { fetchBackings } from '../../actions/backing_actions';

const mapStateToProps = (state) => {
    return {
        projects: state.entities.projects, 
        backings: state.entities.backings, 
    }
}; 

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects()), 
        fetchBackings: () => dispatch(fetchBackings()), 
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile); 