import { SET_CURRENT_PROJECT, setProject } from './currentProjectActions'

describe('currentProjectActions', () => {
  const project = { id: 0, name: 'My Next Project' };
  
  it('addProject should create an SET_CURRENT_PROJECT action', () => {
    expect(setProject(project)).toEqual({
      type: SET_CURRENT_PROJECT,
      project
    });
  });
});