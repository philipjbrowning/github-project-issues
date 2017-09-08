import { UPDATE_API_KEY } from '../actions/userActions';

const userReducer = (state = {key: ''}, action) => {
  switch (action.type) {
    case UPDATE_API_KEY:
      return {
        key: action.key
      };
    default:
      return state;
  }
};

export default userReducer;