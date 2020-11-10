function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGGED":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
    case "LOGOUT":
      return [];

    default:
      return state;
  }
}
export default userReducer;
