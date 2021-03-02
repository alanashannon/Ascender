import { connect } from 'react-redux'; 
import CategoryShow from './category_show';
import { fetchCategories } from '../../actions/categories_actions'; 
import { fetchProjects, fetchUsers } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        categories: state.entities.categories, 
        category: state.entities.categories[ownProps.match.params.categoryId], 
        projects: state.entities.projects, 
        users: state.entities.users 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
        fetchProjects: () => dispatch(fetchProjects()), 
        fetchUsers: () => dispatch(fetchUsers())
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);