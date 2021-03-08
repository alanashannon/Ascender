import { connect } from 'react-redux';
import ProjectCreate from './project_create';
import { createProject } from '../../actions/project_actions';
import { fetchCategories } from '../../actions/categories_actions';

const mapStateToProps = (state) => {
    return {
        project: { 
            id: '',
            title: '', 
            category_id: '',
            description: '', 
            campaign: '', 
            location: '', 
            funding_goal: '', 
            end_date: '', 
            risks: '',
            photoFile: null,
            photoUrl: null,
            author_id: state.session.id, 
        },
        formType: 'Create Your Project',
        categories: Object.values(state.entities.categories)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)), 
        fetchCategories: () => dispatch(fetchCategories())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate); 