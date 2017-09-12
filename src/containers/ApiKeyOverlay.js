import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";
import HelpBlock from "react-bootstrap/es/HelpBlock";
import FormGroup from "react-bootstrap/es/FormGroup";
import {updateApiKey} from "../actions/userActions";

const ApiKeyComponent = ({ key, getValidationState, visibility, validateKey }) => {
  return (
    <Modal show={!key || visibility}>
      <Modal.Header closeButton>
        <Modal.Title>GitHub API Key</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please enter your GitHub API Key</h4>
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={getValidationState(key)}>
            <ControlLabel>Working example with validation</ControlLabel>
            <FormControl
              type="text"
              value={key}
              placeholder="Enter text"
            />
            <FormControl.Feedback />
            <HelpBlock>Refer to GitHub to get your API Key</HelpBlock>
          </FormGroup>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={validateKey}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
};

ApiKeyComponent.propTypes = {
  key: PropTypes.string,
  validateKey: PropTypes.func,
  visibility: PropTypes.bool
};

const getValidationState = (key) => {
  return (key && key.length < 8) ? 'success' : 'error';
};

const mapStateToProps = state => ({
  key: state.user ? state.user.key : '', // TODO: Reducer should take care of this.
  visibility: state.visibility
});

const mapDispatchToProps = dispatch => {
  return {
    getValidationState,
    validateKey: (newKey) => {
      console.log('validate key');
      dispatch(updateApiKey(newKey));
    }
  }
};

const ApiKeyOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiKeyComponent);

export default ApiKeyOverlay;