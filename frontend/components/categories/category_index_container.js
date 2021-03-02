import { connect } from 'react-redux';
import CategoryIndex from './category_index'; 
import { withRouter } from 'react-router-dom';
import { fetchCategories } from '../../actions/categories_actions'; 

const mapStateToProps = (state) => {
    return {
        categories: state.entities.categories, 
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryIndex);