import { CLEAR_CURRENT_PROJECT, SET_CURRENT_PROJECT } from '../actions/currentProjectActions';

const currentProjectReducer = (state = { name: '' }, action) => {
  switch (action.type) {
    case CLEAR_CURRENT_PROJECT:
      return {
        name: ''
      };
    case SET_CURRENT_PROJECT:
      return {
        id: action.project.id,
        name: action.project.name || ''
      };
    default:
      return state;
  }
};

export default currentProjectReducer;