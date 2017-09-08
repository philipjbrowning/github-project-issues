import * as projects from './projectActions'

describe('projectActions', () => {
  it('addProject should create an ADD_PROJECT action', () => {
    expect(projects.addProject('New Project')).toEqual({
      type: 'ADD_PROJECT',
      project: {
        id: 0,
        name: 'New Project'
      }
    });
  });
  
  it('removeProject should create a REMOVE_PROJECT action', () => {
    expect(projects.removeProject(1)).toEqual({
      type: 'REMOVE_PROJECT',
      id: 1
    });
  });
  
  it('updateProject should create an UPDATE_PROJECT action', () => {
    const project = {
      id: 1,
      name: 'Old Project'
    };
    expect(projects.updateProject(project)).toEqual({
      type: 'UPDATE_PROJECT',
      project: project
    });
  });
});