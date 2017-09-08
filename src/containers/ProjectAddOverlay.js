import { connect } from 'react-redux';
import { addProject } from '../actions/projectActions';
import ProjectAdd from '../components/ProjectAdd';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    update: (project) => {
      dispatch(addProject(project))
    }
  }
};

const ProjectAddOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectAdd);

export default ProjectAddOverlay;