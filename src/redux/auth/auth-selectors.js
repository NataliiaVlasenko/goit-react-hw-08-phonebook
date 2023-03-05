const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = function(state){
  return state.auth.user.name;
} 
const getUserEmail = state => state.auth.user.email;
const getToken = state => state.auth.token;
const isFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUserName,
  getUserEmail,
  getToken,
  isFetchingCurrentUser,
  getIsLoggedIn,
};
export default authSelectors;