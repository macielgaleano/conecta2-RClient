const addTweet = (newTweet) => {
    return {
        type:"ADD_TWEET",
        payload: newTweet
    }
}