import { ADD_PROJECT, UPDATE_PROJECT, REMOVE_PROJECT } from '../actions/projectActions';
import projectReducer from './projectReducer';

describe('projectReducer', () => {
  it('should handle initial state', () => {
    expect(
      projectReducer(undefined, {})
    ).toEqual([])
  });
  
  it('should handle ADD_PROJECT', () => {
    const project = {
      id: 0,
      title: 'My First Project'
    };
    expect(
      projectReducer([], {
        type: ADD_PROJECT,
        project
      })
    ).toEqual([
      project
    ])
  });
});