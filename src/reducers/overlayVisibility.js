import {SHOW_API_KEY_OVERLAY, HIDE_API_KEY_OVERLAY, OVERLAY_STATE} from '../actions/overlayActions';

const overlayVisibility = (state = OVERLAY_STATE.NONE, action) => {
  switch (action.type) {
    case HIDE_API_KEY_OVERLAY:
      return action.state;
    case SHOW_API_KEY_OVERLAY:
      return action.state;
    default:
      return state
  }
};

export default overlayVisibility