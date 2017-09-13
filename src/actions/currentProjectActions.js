export const CLEAR_CURRENT_PROJECT = 'CLEAR_CURRENT_PROJECT';
export const SET_CURRENT_PROJECT = 'SET_CURRENT_PROJECT';

export const clearCurrentProject = () => ({
  type: CLEAR_CURRENT_PROJECT,
  project: { name: ''}
});

export const setCurrentProject = (project) => ({
  type: SET_CURRENT_PROJECT,
  project
});