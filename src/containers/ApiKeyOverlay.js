import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {updateApiKey} from '../actions/userActions';
import Modal from "react-bootstrap/es/Modal";
import ApiKeyForm from "../components/ApiKeyForm";
import Button from "react-bootstrap/es/Button";

const ApiKeyComponent = ({ key, visibility, hideOverlay, validateKey }) => (
  <Modal show={visibility}>
    <Modal.Header closeButton>
      <Modal.Title>GitHub API Key</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h4>Please enter your GitHub API Key</h4>
      <ApiKeyForm key={key} onSubmit={validateKey(key)} />
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={hideOverlay}>Update</Button>
    </Modal.Footer>
  </Modal>
);

ApiKeyComponent.propTypes = {
  // hideOverlay: PropTypes.func.required,
  key: PropTypes.string,
  // validateKey: PropTypes.func.required,
  visibility: PropTypes.bool
};

const mapStateToProps = state => ({
  key: state.user.key,
  visibility: state.visibility
});

const mapDispatchToProps = dispatch => {
  return {
    hideOverlay: () => {
      // dispatch(updateApiKey(key));
    },
    validateKey: (key) => {
      dispatch(updateApiKey(key));
    }
  }
};

const ApiKeyOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiKeyComponent);

export default ApiKeyOverlay;