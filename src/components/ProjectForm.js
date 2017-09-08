import React, { Component } from 'react';
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";
import HelpBlock from "react-bootstrap/es/HelpBlock";


const getValidationState = project => {
  return project.name ? 'success' : 'error';
};

const ProjectForm = ({ project = {}, save }) => {
  
  return (
    <form onSubmit={e => {
      e.preventDefault();
      if (!project.name.value.trim())
        return;
      save(project);
    }}>
      <FormGroup
        controlId="formBasicText"
        validationState={this.getValidationState()}>
        <ControlLabel>Working example with validation</ControlLabel>
        <FormControl
          type="text"
          value={project.name}
          placeholder="Enter project name"
        />
        <FormControl.Feedback />
        <HelpBlock>Pick a project name that describes the application well</HelpBlock>
      </FormGroup>
    </form>
  );
};

export default ProjectForm;