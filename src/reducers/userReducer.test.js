import { HIDE_API_KEY_OVERLAY, SHOW_API_KEY_OVERLAY, UPDATE_API_KEY} from '../actions/userActions';
import userReducer from './userReducer'

describe('userReducer', () => {
  const visibleState = { key: 'asdf',  visibility: true };
  const hiddenState = { key: 'asdf',  visibility: false };
  
  it('should handle initial state', () => {
    expect(
      userReducer(undefined, {})
    ).toEqual({ key: '', visibility: false })
  });
  
  it('should handle HIDE_API_KEY_OVERLAY', () => {
    expect(
      userReducer(visibleState, { type: HIDE_API_KEY_OVERLAY })
    ).toEqual(hiddenState);
    expect(
      userReducer(hiddenState, { type: HIDE_API_KEY_OVERLAY })
    ).toEqual(hiddenState);
  });
  
  // it('should handle HIDE_API_KEY_OVERLAY', () => {
  //   expect(
  //     apiKey(undefined, stateA)
  //   ).toEqual(stateB);
  //   expect(
  //     apiKey(undefined, stateA)
  //   ).toEqual(stateB);
  // });
});