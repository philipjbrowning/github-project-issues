import { combineReducers } from 'redux';
// import assignees from './assignees';
import issues from './issueReducer';
import projects from './projectReducer';
import overlayVisibility from "./overlayVisibility";
import user from "./userReducer";

const reducers = combineReducers({
  issues,
  projects,
  user,
  overlayVisibility
});

export default reducers;