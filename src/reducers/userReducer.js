import { UPDATE_API_SECRET } from '../actions/userActions';

const userReducer = (state = { secret: '' }, action) => {
  switch (action.type) {
    case UPDATE_API_SECRET:
      return {
        secret: action.secret || ''
      };
    default:
      return state;
  }
};

export default userReducer;