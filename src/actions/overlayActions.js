export const OVERLAY_STATE = {
  NONE: 1,
  API_SECRET: 2,
  ISSUE: 3,
  PROJECT: 4
};
export const HIDE_API_SECRET_OVERLAY = 'HIDE_API_SECRET_OVERLAY';
export const MIN_API_SECRET_LENGTH = 16;
export const SHOW_API_SECRET_OVERLAY = 'SHOW_API_SECRET_OVERLAY';

export const hideApiKeyOverlay = () => ({
  type: HIDE_API_SECRET_OVERLAY,
  state: OVERLAY_STATE.NONE
});

export const showApiKeyOverlay = () => ({
  type: SHOW_API_SECRET_OVERLAY,
  state: OVERLAY_STATE.API_SECRET
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