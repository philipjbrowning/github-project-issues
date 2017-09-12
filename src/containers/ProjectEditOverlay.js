import * as React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addProject} from '../actions/projectActions';
import Modal from "react-bootstrap/es/Modal";
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/es/Button";
import {hideAddProjectOverlay, OVERLAY_STATE} from "../actions/overlayActions";
import {setProject} from "../actions/currentProjectActions";

const ProjectEditComponent = ({ project, getValidationState, saveProject, updateProject, visibility }) => {
  return (
    <Modal show={visibility}>
      <Modal.Header closeButton>
        <Modal.Title>GitHub Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Project Name</h4>
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={getValidationState(project)}>
            <ControlLabel>Please enter the name of your GitHub Project.</ControlLabel>
            <FormControl
              type="text"
              value={project.name}
              onChange={event => updateProject({ id: project.id, name: event.target.value})}
              placeholder="Enter text"
            />
            <FormControl.Feedback />
          </FormGroup>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={event => saveProject(project)}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
};

ProjectEditComponent.propTypes = {
  getValidationState: PropTypes.func,
  saveProject: PropTypes.func,
  updateProject: PropTypes.func,
  visibility: PropTypes.bool
};

const getValidationState = project => project.name ? 'success' : 'error';

const mapStateToProps = state => ({
  project: state.currentProject,
  visibility: state.overlayVisibility === OVERLAY_STATE.PROJECT
});

const mapDispatchToProps = dispatch => {
  return {
    getValidationState,
    updateProject: (project) => {
      dispatch(setProject(project))
    },
    saveProject: (project) => {
      if (getValidationState(project) === 'success') {
        dispatch(addProject(project.name));
        dispatch(hideAddProjectOverlay());
      }
    }
  }
};

const ProjectEditOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectEditComponent);

export default ProjectEditOverlay;