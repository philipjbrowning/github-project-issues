import {
  ADD_ISSUE,
  REMOVE_ISSUE,
  UPDATE_ISSUE
} from '../actions/issueActions';

const issueReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ISSUE:
      return [
        ...state,
        {
          assignedId: action.assignedId,
          description: action.description,
          id: action.id,
          label: action.label,
          rank: action.rank,
          state: action.state,
          title: action.title
        }
      ];
    case REMOVE_ISSUE:
      return state.filter(issue => issue.id === action.id);
    case UPDATE_ISSUE:
      const index = state.findIndex(issue => issue.id === action.id);
      return [
        ...state.slice(0, index),
        {
          assignedId: action.assignedId,
          description: action.description,
          id: action.id,
          label: action.label,
          rank: action.rank,
          state: action.state,
          title: action.title
        },
        ...state.slice(index + 1)
      ];
    default:
      return state;
  }
};

export default issueReducer;