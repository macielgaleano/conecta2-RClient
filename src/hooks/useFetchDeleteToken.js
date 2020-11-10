import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useFetchDeleteToken = (deleteToken) => {
  const user = useSelector((state) => state.user);
  const url = "https://conecta2-server.vercel.app/users/users";
  const params = { Authorization: user.token };

  useEffect(() => {
    if (deleteToken) {
      axios
        .delete(url, params)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {});
    }
  });
};

export default useFetchDeleteToken;
