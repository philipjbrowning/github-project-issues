import {UPDATE_API_SECRET, updateApiKey} from './userActions';

describe('userActions', () => {
  it('updateApiKey should create an UPDATE_API_KEY action', () => {
    const secret = "aso02jf02u9JHho98hL89**(H9";
    expect(updateApiKey(secret)).toEqual({
      type: UPDATE_API_SECRET,
      secret: secret
    });
  });
});