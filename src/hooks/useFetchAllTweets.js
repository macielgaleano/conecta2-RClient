import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function useFetchAllTweets() {
  const user = useSelector((state) => state.user);
  const [tweets, setTweets] = useState(null);
  const url = "https://conecta2-server.vercel.app/users";
  const params = { Authorization: user.token };

  useEffect(() => {
    axios
      .get(url, params)
      .then((res) => {
        setTweets(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return tweets;
}
