import {
  HIDE_ADD_PROJECT,
  HIDE_API_SECRET_OVERLAY,
  OVERLAY_STATE,
  SHOW_ADD_PROJECT,
  SHOW_API_SECRET_OVERLAY,
  hideAddProjectOverlay,
  hideApiKeyOverlay,
  showAddProjectOverlay,
  showApiKeyOverlay
} from './overlayActions';

describe('visibilityActions', () => {
  it('hideApiKeyOverlay should create a HIDE_API_SECRET_OVERLAY action', () => {
    expect(hideApiKeyOverlay()).toEqual({
      type: HIDE_API_SECRET_OVERLAY,
      state: OVERLAY_STATE.NONE
    });
  });
  
  it('showApiKeyOverlay should create a SHOW_API_SECRET_OVERLAY action', () => {
    expect(showApiKeyOverlay()).toEqual({
      type: SHOW_API_SECRET_OVERLAY,
      state: OVERLAY_STATE.API_SECRET
    });
  });
  it('hideApiKeyOverlay should create a HIDE_ADD_PROJECT action', () => {
    expect(hideAddProjectOverlay()).toEqual({
      type: HIDE_ADD_PROJECT,
      state: OVERLAY_STATE.NONE
    });
  });
  
  it('showApiKeyOverlay should create a SHOW_ADD_PROJECT action', () => {
    expect(showAddProjectOverlay()).toEqual({
      type: SHOW_ADD_PROJECT,
      state: OVERLAY_STATE.PROJECT
    });
  });
});