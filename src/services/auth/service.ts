export const clearStorage = () => {
  localStorage.removeItem('access_token');
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('access_token');
};
