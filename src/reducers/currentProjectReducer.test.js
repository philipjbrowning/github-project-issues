import { CLEAR_CURRENT_PROJECT, SET_CURRENT_PROJECT } from '../actions/currentProjectActions';
import currentProjectReducer from './currentProjectReducer'

describe('current project reducer', () => {
  it('should handle initial state', () => {
    expect(
      currentProjectReducer(undefined, {})
    ).toEqual({ name: '' })
  });
  
  it('should handle CLEAR_CURRENT_PROJECT', () => {
    const emptyProject = { name: '' };
    expect(
      currentProjectReducer([], {
        type: CLEAR_CURRENT_PROJECT
      })
    ).toEqual(emptyProject)
  });
  
  it('should handle SET_CURRENT_PROJECT', () => {
    const project = {
      id: 0,
      name: 'My First Project'
    };
    expect(
      currentProjectReducer([], {
        type: SET_CURRENT_PROJECT,
        project
      })
    ).toEqual(project)
  });
});
