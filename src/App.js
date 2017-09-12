import React, { Component } from 'react';
import './App.css';
import NavContainer from './containers/NavContainer';

import ApiKeyOverlay from "./containers/ApiKeyOverlay";
import {showApiKeyOverlay} from "./actions/overlayActions";
import ProjectEditOverlay from "./containers/ProjectEditOverlay";
import ContentContainer from "./containers/ContentContainer";
import {connect} from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    
    // Only set the state initially in the constructor
    this.state = {
      user: props.user || {} // TOO: Reducer should handle initial state
    };
    
    // Initially show API modal
    if (!this.state.user.key)
      this.props.dispatch(showApiKeyOverlay());
  }
  
  render() {
    return (
      <div className="App">
        <ProjectEditOverlay/>
        <ApiKeyOverlay key={this.state.user.key}/>
        <NavContainer/>
        <ContentContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

export default connect(mapStateToProps)(App);
