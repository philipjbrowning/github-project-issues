import { SET_CURRENT_PROJECT } from '../actions/currentProjectActions';
import currentProjectReducer from './currentProjectReducer'

describe('current project reducer', () => {
  it('should handle initial state', () => {
    expect(
      currentProjectReducer(undefined, {})
    ).toEqual({})
  });
});
