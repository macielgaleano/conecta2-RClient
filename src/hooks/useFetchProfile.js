import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

import axios from "axios";

const useFetchProfile = (username) => {
  
  const [user, setUser] = useState("");
  const url = "https://conecta2-server.vercel.app/" + "users/" + username;
    useEffect(() => {
      axios
        .get(url)
        .then((res) => {
            setUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
  
  },[]);
  return user;
};

export default useFetchProfile;
