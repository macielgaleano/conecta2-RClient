import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const UseFetchUserData = (username) => {
  const user = useSelector((state) => state.user);
  const [userProfile, setUserProfile] = useState(null);
  const url = "https://conecta2-server.vercel.app/" + "users/" + username;
  const params = { Authorization: user.token };

  useEffect(() => {
    axios
      .get(url, params)
      .then((res) => {
        setUserProfile(res);
      })
      .catch((err) => {
        console.error(err);
      });
  });
  return userProfile;
};

export default UseFetchUserData;
