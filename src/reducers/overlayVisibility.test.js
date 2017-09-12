import { OVERLAY_STATE, HIDE_ADD_PROJECT, HIDE_API_SECRET_OVERLAY, MIN_API_SECRET_LENGTH, SHOW_ADD_PROJECT, SHOW_API_SECRET_OVERLAY, hideApiKeyOverlay, showAddProjectOverlay, hideAddProjectOverlay, showApiKeyOverlay} from '../actions/overlayActions';
import overlayVisibility from './overlayVisibility';

describe('overlayVisibility', () => {
  const initialState = OVERLAY_STATE.NONE;
  const otherState = { secret: 'asdfqwerzxcv' };
  
  it('should handle initial state', () => {
    expect(
      overlayVisibility(undefined, {})
    ).toEqual(initialState)
  });

  it('should handle HIDE_API_SECRET_OVERLAY', () => {
    expect(
      overlayVisibility(OVERLAY_STATE.API_SECRET, { type: HIDE_API_SECRET_OVERLAY, state: OVERLAY_STATE.NONE })
    ).toEqual(OVERLAY_STATE.NONE);
  });
});