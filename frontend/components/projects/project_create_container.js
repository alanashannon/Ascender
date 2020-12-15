import { connect } from 'react-redux';
import ProjectCreate from './project_create';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = (state) => {
    return {
        project: { 
            id: '',
            title: '', 
            category: '',
            description: '', 
            campaign: '', 
            location: '', 
            funding_goal: '', 
            end_date: '', 
            risks: '',
            author_id: state.session.id, 
        },
        formType: 'Create Your Project'
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate); 