import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchAllTweetsUser() {
  const user = useSelector((state) => state.user);
  const [tweets, setTweets] = useState(null);
  const url = "https://conecta2-server.vercel.app/" + "users/" + username;
  const params = { Authorization: user.token };

  useEffect(() => {
    if (!tweets) {
      axios
        .get(url, params)
        .then((res) => {
          setTweets(res.data[1]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
  return userProfile;
}
