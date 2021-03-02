import { connect } from 'react-redux'; 
import CategoryShow from './category_show';
import { fetchCategories } from '../../actions/categories_actions'; 
import { fetchProjects, fetchUsers } from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
    }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(CategoryShow);