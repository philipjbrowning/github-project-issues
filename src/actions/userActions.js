export const UPDATE_API_SECRET = 'UPDATE_API_SECRET';

export const updateApiKey = (secret) => ({
  type: UPDATE_API_SECRET,
  secret
});