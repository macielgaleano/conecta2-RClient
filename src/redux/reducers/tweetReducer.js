function tweets(state = [], action) {
    switch (action.type) {
      case "ADD_TWEET":
          let auxState = [...state]
          auxState.unshift(action.payload)
        return auxState
        
      default:
        return state;
    }
  }
  export default tweets;