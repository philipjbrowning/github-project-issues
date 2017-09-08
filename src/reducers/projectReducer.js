import { ADD_PROJECT, REMOVE_PROJECT, UPDATE_PROJECT } from '../actions/projectActions';

const projectReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return [
        ...state,
        {
          ...action.project
        }
      ];
    case REMOVE_PROJECT:
      return state.filter(project => project.id === action.id);
    case UPDATE_PROJECT:
      // const index = state.findIndex(project => {
      //   console.log(project);
      //   return project.id === action.issue.id
      // });
      // if (index !== -1)
      //   return [
      //     ...state.slice(0, index),
      //     {...action.project},
      //     ...state.slice(index + 1)
      //   ];
      return state;
    default:
      return state;
  }
};

export default projectReducer;