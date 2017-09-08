export const ADD_PROJECT = 'ADD_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const VIEW_PROJECT = 'VIEW_PROJECT';

let nextProjectId = 0;
export const addProject = (name) => ({
  type: ADD_PROJECT,
  project: {
    id: nextProjectId++,
    name
  }
});

export const removeProject = (id) => ({
  type: REMOVE_PROJECT,
  id
});

export const updateProject = (project) => ({
  type: UPDATE_PROJECT,
  project
});

export const viewProject = (project) => ({
  type: VIEW_PROJECT,
  project
});