import React, { Component } from 'react';
import FormGroup from "react-bootstrap/es/FormGroup";
import ControlLabel from "react-bootstrap/es/ControlLabel";
import FormControl from "react-bootstrap/es/FormControl";
import HelpBlock from "react-bootstrap/es/HelpBlock";

class ApiKeyForm extends Component {
  constructor(props) {
    super(props);
  
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.props.onSecretChange(e.target.value);
  }
  
  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}>
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.props.secret}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Refer to GitHub to get your API Key</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

export default ApiKeyForm;
