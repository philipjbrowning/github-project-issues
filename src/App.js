import React, { Component } from 'react';
import './App.css';
import NavContainer from './containers/NavContainer';
import { Provider } from 'react-redux';

import ApiKeyOverlay from "./containers/ApiKeyOverlay";
import {showApiKeyOverlay} from "./actions/overlayActions";
import ProjectEditOverlay from "./containers/ProjectEditOverlay";
import store from './store';
import ContentContainer from "./containers/ContentContainer";

class App extends Component {
  constructor(props) {
    super(props);
    
    // Initially show API modal
    if (!store.getState().user.key)
      store.dispatch(showApiKeyOverlay());
  }
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <ProjectEditOverlay/>
          <ApiKeyOverlay key={''}/>
          <NavContainer/>
          <ContentContainer/>
        </div>
      </Provider>
    );
  }
}

export default App;
