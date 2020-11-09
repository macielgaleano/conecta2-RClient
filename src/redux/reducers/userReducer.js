function userReducer(state = {}, action) {
  switch (action.type) {
    case "LOGGED":
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
      };
      case "PROFILE":
        return(action.payload)
    default:
      return state;
  }
}
export default userReducer;
