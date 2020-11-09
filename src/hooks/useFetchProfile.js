import { useState, useEffect } from "react";

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
  
  },[username]);
 
};

export default useFetchProfile;
