import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categories_actions';
import { fetchProjects, fetchUsers } from '../../actions/project_actions';
import SearchResults from './search_results';

const mapStateToProps = (state, ownProps) => {
    return {
        projects: Object.values(state.entities.projects), 
        input: ownProps.match.params.input, 
        categories: Object.values(state.entities.categories),
        users: state.entities.users 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => dispatch(fetchProjects()),
        fetchCategories: () => dispatch(fetchCategories()),
        fetchUsers: () => dispatch(fetchUsers())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);