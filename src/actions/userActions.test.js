import * as user from './userActions';

describe('userActions', () => {
  it('updateApiKey should create an UPDATE_API_KEY action', () => {
    const key = "aso02jf02u9JHho98hL89**(H9";
    expect(user.updateApiKey(key)).toEqual({
      type: 'UPDATE_API_KEY',
      key: key
    });
  });
});