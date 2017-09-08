import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DropdownButton from "react-bootstrap/es/DropdownButton";
import MenuItem from "react-bootstrap/es/MenuItem";

class NewItemDropdownButton extends Component {
  createNewProject(e) {
    e.preventDefault();
    console.log('createNew Project');
    this.props.onNewProject();
  }
  
  logout(e) {
    e.preventDefault();
    console.log('logout');
  }
  
  render() {
    return (
      <DropdownButton bsStyle={this.props.type.toLowerCase()} title={this.props.type} key={this.props.i} id={`dropdown-basic-${this.props.i}`}>
        <MenuItem eventKey="1" onClick={this.createNewProject}>New Project</MenuItem>
        <MenuItem eventKey="2" onClick={this.logout}>Logout</MenuItem>
      </DropdownButton>
    );
  }
}

NewItemDropdownButton.propTypes = {
  i: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
};

export default NewItemDropdownButton;