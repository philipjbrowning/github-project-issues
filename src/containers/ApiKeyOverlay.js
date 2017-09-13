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
import {hideApiKeyOverlay, MIN_API_SECRET_LENGTH, OVERLAY_STATE} from "../actions/overlayActions";

const ApiKeyComponent = ({ secret, getValidationState, updateSecret, validateSecret, visibility }) => {
  return (
    <Modal show={!secret || visibility}>
      <Modal.Header closeButton>
        <Modal.Title>GitHub API Key</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <FormGroup
            controlId="formBasicText"
            validationState={getValidationState(secret)}>
            <ControlLabel>Please enter your API secret to use this application.</ControlLabel>
            <FormControl
              type="text"
              value={secret}
              onChange={event => updateSecret(event.target.value)}
              placeholder="Enter text"
            />
            <FormControl.Feedback />
            <HelpBlock>Refer to GitHub to get your API Key</HelpBlock>
          </FormGroup>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={event => validateSecret(secret)}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
};

ApiKeyComponent.propTypes = {
  getValidationState: PropTypes.func,
  secret: PropTypes.string,
  validateSecret: PropTypes.func,
  updateSecret: PropTypes.func,
  visibility: PropTypes.bool
};

const getValidationState = secret => (secret && secret.length >= MIN_API_SECRET_LENGTH) ? 'success' : 'error';

const mapStateToProps = state => ({
  secret: state.user.secret,
  visibility: state.overlayVisibility === OVERLAY_STATE.API_SECRET
});

const mapDispatchToProps = dispatch => {
  return {
    getValidationState,
    updateSecret: (secret) => {
      dispatch(updateApiKey(secret));
    },
    validateSecret: (secret) => {
      if (getValidationState(secret) === 'success') {
        dispatch(hideApiKeyOverlay());
      }
    }
  }
};

const ApiKeyOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiKeyComponent);

export default ApiKeyOverlay;