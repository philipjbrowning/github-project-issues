import { UPDATE_API_SECRET} from '../actions/userActions';
import userReducer from './userReducer'

describe('userReducer', () => {
  const initialState = { secret: '' };
  const otherState = { secret: 'asdfqwerzxcv' };
  
  it('should handle initial state', () => {
    expect(
      userReducer(undefined, {})
    ).toEqual(initialState)
  });
  
  it('should handle UPDATE_API_SECRET', () => {
    const secret = 'password';
    expect(
      userReducer(initialState, { type: UPDATE_API_SECRET, secret })
    ).toEqual({ secret });
    expect(
      userReducer(otherState, { type: UPDATE_API_SECRET, secret: '' })
    ).toEqual(initialState);
    expect(
      userReducer(otherState, { type: UPDATE_API_SECRET, secret: null })
    ).toEqual(initialState);
    expect(
      userReducer(otherState, { type: UPDATE_API_SECRET, secret: undefined })
    ).toEqual(initialState);
  });
});