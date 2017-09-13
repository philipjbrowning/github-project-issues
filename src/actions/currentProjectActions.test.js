import { CLEAR_CURRENT_PROJECT, SET_CURRENT_PROJECT, clearCurrentProject, setCurrentProject } from './currentProjectActions'

describe('currentProjectActions', () => {
  const project = { id: 0, name: 'My Next Project' };
  const emptyProject = { name: '' };
  
  it('addProject should create an CLEAR_CURRENT_PROJECT action', () => {
    expect(clearCurrentProject(project)).toEqual({
      type: CLEAR_CURRENT_PROJECT,
      project: emptyProject
    });
  });
  
  it('addProject should create an SET_CURRENT_PROJECT action', () => {
    expect(setCurrentProject(project)).toEqual({
      type: SET_CURRENT_PROJECT,
      project
    });
  });
});