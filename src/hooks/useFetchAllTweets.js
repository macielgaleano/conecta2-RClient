import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function useFetchAllTweets() {
  const user = useSelector((state) => state.user);
  const [tweets, setTweets] = useState(null);
  const url = "https://conecta2-server.vercel.app/users";
  console.log(user.token);
  const params = { Authorization: `Bearer ${user.token}` };

  useEffect(() => {
    axios
      .get(url, params)
      .then((res) => {
        setTweets(res.data);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return tweets;
}
