function tweets(state = [], action) {
  switch (action.type) {
    case "ADD_TWEET":
      let auxState = [...state];
      auxState.unshift(action.payload);
      return auxState;
    case "LIST_TWEETS":
      return [];
    default:
      return state;
  }
}
export default tweets;
