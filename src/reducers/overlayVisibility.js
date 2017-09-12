import {OVERLAY_STATE} from '../actions/overlayActions';

// Currently not dependent upon the previous state, so there is no switch
// statement to perform different operations based on the previous state.
const overlayVisibility = (state = OVERLAY_STATE.NONE, action) =>  action.state || state;

export default overlayVisibility;