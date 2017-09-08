import React from 'react';
import logo from '../logo.svg';
import {addProject} from "../actions/projectActions";
import {connect} from "react-redux";
import Navbar from "react-bootstrap/es/Navbar";
import Nav from "react-bootstrap/es/Nav";
import NavItem from "react-bootstrap/es/NavItem";
import {updateApiKey} from "../actions/userActions";
import PropTypes from 'prop-types';

const NavComponent = ({ onNewProjectClick, onLogoutClick }) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem>Github Project Issues</NavItem>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} onClick={onNewProjectClick}>New Project</NavItem>
      <NavItem eventKey={2} onClick={onLogoutClick}>Logout</NavItem>
    </Nav>
  </Navbar>
);

NavComponent.propTypes = {
  onLogoutClick: PropTypes.func.isRequired,
  onNewProjectClick: PropTypes.func.isRequired
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => {
  return {
    onLogoutClick: () => {
      dispatch(updateApiKey(''));
    },
    onNewProjectClick: () => {
      console.log('onNewProjectClick');
      dispatch(addProject());
    }
  }
};

const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavComponent);

export default NavContainer;
