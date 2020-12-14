import { connect } from 'react-redux';
import ProjectCreate from './project_create';
import { createProject } from '../../actions/project_actions';

const mapStateToProps = (state) => {
    return {
        project: { 
            title: '', 
            category: '',
            description: '', 
            campaign: '', 
            location: '', 
            fundingGoal: '', 
            endDate: '', 
            risks: '',
            authorId: state.session.id, 
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