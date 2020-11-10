import React from "react";
import { useSelector } from "react-redux";

export default function useFetchAllTweetsUser() {
  const user = useSelector((state) => state.user);
  const [tweets, setUserProfile] = useState(null);
  const url = "https://conecta2-server.vercel.app/" + "users/" + username;
  const params = {
    Authorization:
      " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYTMwMTNjNzU3YmRiMmE1ZWUyODEwMyIsImlhdCI6MTYwNDkzMjQyOCwiZXhwIjoxNjA1MTQ4NDI4fQ.FKT2dTJcgm0osRYHSVVO_jt8rQpW2U5eQHSZUR9tKL8",
  };

  useEffect(() => {
    if (!userProfile) {
      axios
        .get(url, params)
        .then((res) => {
          setUserProfile(res.data[1]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
  return userProfile;
}
