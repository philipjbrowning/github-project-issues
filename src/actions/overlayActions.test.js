import * as overlays from './overlayActions';

describe('visibilityActions', () => {
  it('hideApiKeyOverlay should create a HIDE_API_KEY_OVERLAY action', () => {
    expect(overlays.hideApiKeyOverlay()).toEqual({
      type: 'HIDE_API_KEY_OVERLAY'
    });
  });
  
  it('showApiKeyOverlay should create a SHOW_API_KEY_OVERLAY action', () => {
    expect(overlays.showApiKeyOverlay()).toEqual({
      type: 'SHOW_API_KEY_OVERLAY'
    });
  });
});