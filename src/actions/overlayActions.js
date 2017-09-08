export const OVERLAY_STATE = {
  NONE: 0,
  API_KEY: 1,
  ISSUE: 2,
  PROJECT: 3
};
export const HIDE_API_KEY_OVERLAY = 'HIDE_API_KEY_OVERLAY';
export const SHOW_API_KEY_OVERLAY = 'SHOW_API_KEY_OVERLAY';

export const hideApiKeyOverlay = () => ({
  type: HIDE_API_KEY_OVERLAY,
  state: OVERLAY_STATE.NONE
});

export const showApiKeyOverlay = () => ({
  type: SHOW_API_KEY_OVERLAY,
  state: OVERLAY_STATE.API_KEY
});


export const HIDE_ADD_PROJECT = 'HIDE_ADD_PROJECT';
export const SHOW_ADD_PROJECT = 'SHOW_ADD_PROJECT';

export const hideAddProjectOverlay = () => ({
  type: HIDE_ADD_PROJECT,
  state: OVERLAY_STATE.NONE
});

export const showAddProjectOverlay = () => ({
  type: SHOW_ADD_PROJECT,
  state: OVERLAY_STATE.PROJECT
});