import React from "react";
import Modal from "react-bootstrap/es/Modal";
import Button from "react-bootstrap/es/Button";
import ProjectForm from "./ProjectForm";

const ProjectAdd = ({ visibility, add }) => {
  return (
    <Modal show={visibility}>
      <Modal.Header closeButton>
        <Modal.Title>Create A New Project</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please enter the project name</h4>
        <ProjectForm project={{}} save={add}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProjectAdd;
