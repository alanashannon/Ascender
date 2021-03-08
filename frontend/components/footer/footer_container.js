import { connect } from 'react-redux';
import { fetchCategories } from '../../actions/categories_actions';
import Footer from './footer'; 

const mapStateToProps = (state) => {
    return {
        categories: Object.values(state.entities.categories),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategories: () => dispatch(fetchCategories()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);