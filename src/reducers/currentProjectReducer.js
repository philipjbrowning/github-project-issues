import { SET_CURRENT_PROJECT } from '../actions/currentProjectActions';

const currentProjectReducer = (state = { name: '' }, action) => {
  switch (action.type) {
    case SET_CURRENT_PROJECT:
      return action.project || state;
    default:
      return state;
  }
};

export default currentProjectReducer;