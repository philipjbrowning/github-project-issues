import { HIDE_API_SECRET_OVERLAY, HIDE_ADD_PROJECT, OVERLAY_STATE, SHOW_API_SECRET_OVERLAY, SHOW_ADD_PROJECT} from '../actions/overlayActions';

const overlayVisibility = (state = OVERLAY_STATE.NONE, action) => {
  switch (action.type) {
    case HIDE_API_SECRET_OVERLAY:
    case HIDE_ADD_PROJECT:
    case SHOW_API_SECRET_OVERLAY:
    case SHOW_ADD_PROJECT:
      return action.state || state;
    default:
      return state;
  }
};

export default overlayVisibility;