import { connect } from 'react-redux';
import {updateProject} from '../actions/projectActions';
import ProjectEdit from '../components/ProjectEdit'

const mapStateToProps = state => ({ projects: state.projects });

const mapDispatchToProps = dispatch => {
  return {
    update: (project) => {
      dispatch(updateProject(project))
    }
  }
};

const ProjectEditOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEdit);

export default ProjectEditOverlay;